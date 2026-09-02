---
slug: shell-history-i-want
date: 2026-09-02
title: The Shell History I Actually Wanted
description: Atuin gives me better search and synchronized commands across machines. I self-host it to keep control of the sync and AI services.
---

## The history that buried the command

Shell history is supposed to save me from typing the same command twice. It is a great feeling when I need a command with a complex set of arguments and know that I have already used it before. Instead of reading the help again and reconstructing the command, I can search through my history and select the version that already worked. But with the default shell history, finding an old command can sometimes take longer than typing it again.

Commands I ran recently are usually easy to find by pressing the Up arrow. Older commands are more difficult. When I have entered hundreds of commands since using one, stepping through them one by one is no longer practical. Often, the default history search does not work well enough to save me from that little dance. And sometimes I know that I have run the command before, but unfortunately it was on another machine.

What I need is a way to synchronize my history while making it easier, not harder, to find the command I want.

That is where Atuin comes in.

## What does Atuin change?

[Atuin](https://atuin.sh/) is a supercharged shell history. It integrates where I already use history, taking over shortcuts such as `Ctrl+R` or the Up arrow instead of asking me to adopt a completely separate workflow.

Behind that interface, it replaces the usual history text file with a local SQLite database. That structured storage is what enables better search, additional metadata, and another great feature of Atuin: synchronization between devices.

The synchronized history is [end-to-end encrypted](https://docs.atuin.sh/latest/reference/sync/?h=encrypted). A command I ran on one device can therefore become available on another without the sync server receiving it as plaintext.

And because apparently no tool released in 2026 can escape it, Atuin also has an AI feature. Atuin AI can generate shell commands or answer questions about commands directly from the terminal.

Atuin also supports [syncing dotfiles](https://docs.atuin.sh/18.21/guide/dotfiles/), although I have not experimented with that yet.

P.S. Of course it is written in Rust, so it is blazingly fast.

## What does better search actually look like?

Before getting into synchronization and self-hosting, the feature I interact with most deserves some attention: search.

Atuin lets me narrow my history based on the context in which a command was used. Pressing `Ctrl+R` repeatedly cycles through its **filter modes**:

- **GLOBAL:** Search the full history from every synchronized machine.
- **HOST:** Search only the history from the current machine.
- **SESSION:** Search only the current shell session.
- **DIRECTORY:** Search only commands run in the current directory.
  - I mapped this filter to the Up arrow with `filter_mode_shell_up_key_binding = "directory"`.
- **WORKSPACE:** Search commands from anywhere inside the current Git repository.
  - This must be enabled with `workspaces = true`.
- **SESSION-PRELOAD:** Search the current session together with global history from before the session started. Atuin displays this as `Session+`.

This already solves an important part of my original problem. If I am inside a repository and remember that I ran a command somewhere in that project, I do not have to search through everything I have ever typed.

I can also change _how_ Atuin matches the query by cycling through its **search modes** with `Ctrl+S`:

- **fuzzy:** Fuzzy matching based on fzf syntax. This is the default.
- **prefix:** Commands that start with the query.
- **fulltext:** Commands that contain the text anywhere.
- **daemon-fuzzy:** Fuzzy search backed by the daemon's in-memory index. Atuin displays this as `Daemon`.

I prefer `daemon-fuzzy`. It combines the flexibility of a fuzzy finder with the speed of an in-memory index, and in daily use it feels smooth and fast.

But even with a well-scoped search, I often get more than one result:

![Atuin search results](/images/atuin-search-results.png)

Seeing the results together is already an improvement over the behaviour of many shell histories where you step through all commands one-by-one. Atuin can also show when a command last ran, how long it took, and whether it succeeded (this is done by color-coding the runtime, can you see why command 4 was not successful?).

The screenshot uses the default column configuration, but you can adapt it to your needs through Atuin's [available column types](https://docs.atuin.sh/latest/configuration/config/#available-column-types).

The numbers on the left provide another shortcut. If I want to run `uv run ruff format --check .` again, I can select it with `Option+5` on my Mac.

I also enabled Vim mode with `keymap_mode = "vim-normal"`, which lets me navigate the results with familiar Vim bindings. But I'm still undecided if I prefer `vim-normal` or `vim-insert` after starting a search.

This is the part of Atuin that immediately changed my normal terminal workflow. But the feature that makes the history available everywhere also raises the more uncomfortable question.

## Do I really want to synchronize my terminal history?

Terminal history can contain a detailed record of what I have worked on. Adding synchronization and AI to it naturally sounds like adding two new ways for that information to leave my machine.

Atuin addresses this concerns for the synchronization in its docs. They state, that synchronized history is [end-to-end encrypted](https://docs.atuin.sh/18.19/reference/sync/?h=end-to-end) and that the hosted service therefor cannot access its contents.

The hosted AI service is less straightforward. At the time of writing, Atuin AI is free, but the documentation does not explain its hosting and data handling in much detail. I found a [forum response from Ellie, Atuin's creator](https://forum.atuin.sh/t/document-ai-privacy-policy-please/1459/2), stating that Atuin stores summary usage data such as the token count and model, while prompts, shell history, and other tool calls are not persisted. She also says that the model and provider may change, but that Atuin uses US-based providers offering zero data retention and no training on the submitted data.

Those are useful promises, but they are still promises made about infrastructure I do not control.

Fortunately, trusting the hosted services is not the only option. Both the Atuin sync server and the Atuin AI backend can be self-hosted. Since I already operate a VPS, I chose that route.

## How I self-host Atuin

Atuin's documentation already does a good job of explaining how to deploy the [sync server](https://docs.atuin.sh/latest/self-hosting/server-setup/) and [AI server](https://docs.atuin.sh/latest/ai/self-hosting/). Those details are also likely to change over time, so this is not intended to be another step-by-step installation guide. Instead, this section describes the architecture I chose and the decisions behind it.

I use [Dokploy](https://dokploy.com/) on my VPS, so deploying both services there was the straightforward choice. I created one Atuin project containing:

- the Atuin sync server
- the Atuin AI server
- a [llama.cpp](https://github.com/ggml-org/llama.cpp) instance hosting the language model used by the AI server.

For the deployment itself, I followed the Docker examples for the [sync server](https://docs.atuin.sh/latest/self-hosting/docker/) and [AI server](https://docs.atuin.sh/latest/ai/self-hosting/).

### Keeping the services behind Cloudflare

I use Cloudflare in front of my VPS and Cloudflare Zero Trust to protect most of the applications running there. The wider setup is outside the scope of this post, and probably material for another one. I mention it here because Atuin only supports adding the required Cloudflare Access headers to sync requests natively.

My domains are configured so that requests to the subdomains for the sync and AI servers first pass through Cloudflare. From there, they are forwarded to my VPS through a Cloudflare Tunnel only when the request contains valid service credentials in its headers.

For sync requests, these headers can be configured using [`extra_headers`](https://docs.atuin.sh/18.20/configuration/config/#extra_headers). As of writing, the AI client does not offer an equivalent option.

To solve that and to keep my Cloudflare credentials out of the Atuin configuration, I run a local [Caddy](https://github.com/caddyserver/caddy) instance. Atuin sends requests for both services to Caddy, which adds the required Cloudflare headers and forwards them to the corresponding endpoints.

But in my setup, Cloudflare is not the only authentication layer. Both Atuin services still apply their own authentication:

- The sync server requires an Atuin account and authenticated session. After creating my account, I disabled new registrations on the server.
- The AI server requires a bearer token with every request.

### Why I started with SQLite

For the sync server, I started with the SQLite backend. I could run PostgreSQL and add a separate remote backup (for example, on my NAS) but I decided that would be unnecessary for my current use.

The purpose of the sync server is to keep the same history on multiple devices. If I lose the database on the VPS, I should still have synchronized local copies on devices in different locations, as well as in the backups of those machines. That is not the same as a carefully designed database backup strategy, but for my personal shell history, it is a trade-off I am comfortable with.

### Why I chose a small local model

For Atuin AI, I host `SmolLM3-3B Q4_K_M` through llama.cpp. As the name suggests, it is a small model.

My assumption is that it will be sufficient for the relatively simple tasks for which I currently expect to use Atuin AI, while remaining fast enough and avoiding unnecessary memory usage on the VPS. That is something actual usage still has to confirm. If I begin using Atuin AI regularly for more complex tasks, I can replace it with a larger model later.

## What else can the database do?

Search and synchronization are the main benefits for me, but storing structured history allows Atuin to do more than retrieve commands.

One example is the **Inspector**. With a command selected, I can open the Inspector using `Ctrl+O` and see additional statistics about the command:

![Atuin Inspector](/images/atuin-inspector.png)

As the note at the bottom of the screenshot indicates, this is still a new feature.

Honestly, I am not yet sure how often I will use the Inspector in my daily work. It is interesting to see what becomes possible once shell history is treated as structured data, but interesting and regularly useful are not necessarily the same thing. I may find a valuable use for it over time.

## Making Atuin behave like my tool

Throughout this post, I have already mentioned several settings that change how Atuin behaves. There are many more, and the [configuration documentation](https://docs.atuin.sh/latest/configuration/config/) explains them well.

My current configuration contains the following changes from the defaults:

```toml
sync_address = "http://localhost:8081" # Pointing to my caddy proxy
search_mode_shell_up_key_binding = "daemon-fuzzy"
filter_mode_shell_up_key_binding = "directory"
workspaces = true
style = "full"
enter_accept = false
search_mode = "daemon-fuzzy"
keymap_mode = "vim-normal"

# This would let me configure my Cloudflare credentials natively, but only for the sync requests
# extra_headers = { "CF-Access-Client-Id" = "...", "CF-Access-Client-Secret" = "..." }

[daemon]
enabled = true
autostart = true

[ai]
enabled = true
endpoint = "http://localhost:8080"
## The bearer token is supplied outside this configuration file
model = "smollm3"
```

Most of these settings are self-explanatory. I prefer the `full` design, which is what the earlier screenshot shows. My first instinct was also, that I want to select a command with `Enter` without executing it immediately. That gives me an opportunity to edit it first.

But I am still switching `enter_accept` between `true` and `false` while I decide which behaviour I prefer. This is a small choice, but it affects something I do often enough that it is worth trying both instead of deciding in theory.

## Was replacing my shell history worth it?

For search alone, yes.

I no longer have to treat history as a long list that I can only step through in reverse. I can narrow it to the current directory, repository, session, or machine and then search it using the matching behaviour that works best for me. Synchronization also means the useful command does not have to have been run on the device currently in front of me.

Self-hosting required more work than simply creating an account with the hosted service. In return, I can use synchronization and AI without sending that data through infrastructure chosen and controlled by somebody else. Because I already operate the VPS and Dokploy setup, that trade-off makes sense for me. It may not make sense for everyone.

Not every Atuin feature has earned a permanent place in my workflow yet. I do not know how often I will use the Inspector. The small AI model still has to prove that it is sufficient and I have to find out if even Atuin's AI implementation itself is helpful to me.

That is fine. I don't need every feature of Atuin to be super useful to me. The important improvement happens when I press `Ctrl+R` or the Up arrow and find the command I was looking for without reconstructing it from scratch.

That is what I wanted from shell history in the first place, and here Atuin really delivers.

> **AI assistance:** I used AI to improve the grammar, spelling, and some wording in this post. All ideas, opinions, and substantive content are my own.
