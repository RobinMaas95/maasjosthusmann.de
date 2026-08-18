---
slug: windows-macos-shortcuts
date: 2026-08-16
title: How I Stopped Mixing Up Windows and macOS Shortcuts
description: Using the same keyboard with Windows and macOS made switching harder, not easier. Here is how I fixed it without changing the keyboard.
---

## The keyboard that made switching harder

Using the same keyboard on Windows and macOS sounds like it should make switching between them easier. For me, it did the opposite.

I use a managed Windows laptop for my day job and a MacBook for freelance work as a Platform and AI Engineer, as well as for personal projects. Since my day job makes up the majority of my time in front of a computer, the Windows shortcuts get plenty of practice. At my desk, I connect the same [Glove80](/blog/glove80) to both machines.

When I type directly on the built-in laptop keyboards, switching between the two systems works surprisingly well. My guess is that the computers look different and their keyboards feel different, giving my fingers enough visual and tactile hints about what to do.

With the Glove80, those hints disappear. My hands feel the exact same keyboard on both computers, and seeing a different operating system on the same monitor apparently does not do the trick. After a long workday, I default to `Ctrl+C` on my MacBook. After a weekend or a long coding session in the evening, I default to `Cmd+C` on the Windows machine.

Of course, I know which machine needs which modifier. If I consciously chose the shortcut every time, I probably would not have an issue. But I do not think “press Command and C.” I think “copy this string,” or “select everything,” and my fingers perform the shortcut unconsciously. Mnemonics are a great thing, until my fingers confidently choose the mnemonic for the wrong operating system.

The annoying part is that I actually like both sets of shortcuts, just on different keyboards. On the MacBook itself, `Cmd` sits comfortably under my left thumb, and I like the normal macOS shortcuts. I do not want to change them, especially because I do not always have my Glove80 with me. I use it whenever I'm at my desk, but there are plenty of situations where I'm somewhere else with just my MacBook. Like right now, sitting on the balcony and enjoying the warm summer weather in Germany.

On the Glove80, however, the Windows defaults feel better for my hands. Both `Ctrl` and `Cmd` (or System) are pressed with the thumbs, but in the default layout `Ctrl` is available on both thumb clusters while `Cmd` is only on the right one. Copying and pasting with my left hand while using the mouse with my right hand therefore works perfectly well with `Ctrl`, but not with `Cmd`. I could move `Cmd` to the other thumb cluster, of course, but I am happy with the default layout and would rather not maintain a custom one just for this.

So I did not really want one universal modifier. I wanted the Glove80 to keep using the Windows-style shortcuts on both computers while the built-in MacBook keyboard continued behaving like a normal Mac keyboard.

## Why I did not solve it in the keyboard

The obvious solution seemed to be changing the keyboard itself. The Glove80 uses the open-source keyboard firmware ZMK, something I did not mention in my [recent blog post](/blog/glove80). Its layout can be changed in a web-based editor and installed on the keyboard as customized firmware. I could use one layout for Windows and another for my Mac, swap the relevant keys at the firmware level, and continue happily with my shortcut life.

But the more I thought about that approach, the less automatic it looked. The most convenient firmware solution I found would switch the layout with the Bluetooth profile, which would not cover a cable connection. That mattered because, for the longest time, my managed work laptop did not allow external Bluetooth devices. I could switch ZMK layers manually instead, but then I would have to remember another piece of keyboard state myself, the exact problem I was trying to get rid of.

More importantly, the keyboard does not normally know which application currently has focus. ZMK can be granular through layers, behaviors, and macros, but I want terminal applications to keep receiving real `Ctrl` combinations while desktop applications receive the translated shortcuts, without manually toggling a layer every time I switch applications.

## Why the Mac is the better place to remap

Changing the Windows machine is not something I want to pursue either. It is a managed work laptop, I do not have admin rights for deeper changes, and I deliberately want to keep modifications there to a minimum. There may be user-level or application-specific Windows solutions, but my private MacBook is the obvious and less intrusive place to solve the problem.

macOS does have native modifier-key settings, including separate settings for connected keyboards. That can handle a complete `Ctrl`/`Cmd` swap, but my requirements are more specific: individual shortcuts, application-based exclusions, and translations such as `Ctrl+Y` to `Cmd+Shift+Z`. For that, the native options are too limited.

So I looked around and found [Karabiner-Elements](https://karabiner-elements.pqrs.org/), an open-source keyboard customizer that is actually perfect for my needs.

### Starting with the shortcuts that actually bother me

For the remapping, I had two possible approaches. The first one was to sit down, try to think of all the possible shortcuts I could struggle with, and set them up at once. The second was to just start with the few that I already knew I had struggled with and extend the list whenever I had issues with another one. While the latter option sounds a little bit cheap, after all, the whole idea is to prevent annoying mishaps and create a consistent experience, I think it is the better approach. For one, I will certainly overlook some key mappings even with option 1, so I will have to come back to the config either way. Secondly, the setup with Karabiner-Elements is easy and fast enough that adding another combination down the line takes so little time that I think I'll be willing to do it instead of postponing the fix because of the effort involved. And thirdly, I'm a firm believer in not over-optimizing. As with writing software, **most of the time** (of course, there are exceptions), it's better not to over-engineer in the beginning. Get early feedback and then adjust accordingly instead of making a perfect plan that breaks as soon as it meets reality.

So my initial remapping setup is:

```text
Ctrl+C → Cmd+C       → Copy
Ctrl+V → Cmd+V       → Paste
Ctrl+X → Cmd+X       → Cut
Ctrl+Z → Cmd+Z       → Undo
Ctrl+Y → Cmd+Shift+Z → Redo
Ctrl+A → Cmd+A       → Select all
Ctrl+S → Cmd+S       → Save
Ctrl+F → Cmd+F       → Find
```

In addition, I added `Ctrl+T → Cmd+T → new tab` for Chrome only.

## What my Karabiner rules look like

Karabiner-Elements has a UI that allows you to edit the key mappings within its own editor, but you can also directly edit the config file at:

```bash
~/.config/karabiner/karabiner.json
```

In my config, I add a custom manipulator for each shortcut (which means extending it later is just a matter of adding another one of these).

As an example, this is my rule for `Ctrl+C`:

```json
{
  "type": "basic",
  "from": {
    "key_code": "c",
    "modifiers": {
      "mandatory": ["control"],
      "optional": ["any"]
    }
  },
  "to": [
    {
      "key_code": "c",
      "modifiers": ["command"]
    }
  ],
  "conditions": [
    {
      "type": "device_if",
      "identifiers": [
        {
          "vendor_id": 5824,
          "product_id": 10203
        }
      ]
    },
    {
      "type": "frontmost_application_unless",
      "bundle_identifiers": ["^com\\.mitchellh\\.ghostty$"]
    }
  ]
}
```

The **from** section describes the actual input. In this case, in addition to the `c` key, the _Control_ (`Ctrl`) modifier **must** be pressed, and every other modifier **can** be pressed. If that is the case, the input is remapped to what is described in the **to** section: in this case, _Command_ and `c`. Any matched _optional_ modifier is passed through unchanged. So if you also press `Shift`, for example, `Ctrl+Shift+C` is mapped to `Cmd+Shift+C`.

Using `optional: ["any"]` intentionally makes the rule broader than this one example: Option and other additional modifiers are preserved too. That fits how I want these shortcuts to behave, but someone who wants tighter rules could list only the optional modifiers they actually need.

We also have two conditions, which act as additional guards that determine when the rule applies. The first tells Karabiner-Elements to apply this rule only to input from a device reporting this _vendor_id_ and _product_id_. In my setup, that matches my Glove80. The pair is not a globally unique identity for one physical keyboard, so a setup with another matching device might need additional identifiers. The second condition excludes (_frontmost_application_unless_) Ghostty, my default terminal application. More about why I exclude Ghostty later.

Most of the rules I created follow the same pattern, but for `Ctrl+Y`, I needed a slightly different approach because the default approach for _Redo_ on Mac is `Cmd+Shift+Z`, rather than `Cmd+Y`. Applications can define their own shortcuts, but this is the convention used by the ones I want to cover. And it is easy enough to handle with Karabiner-Elements:

```json
{
  "from": {
    "key_code": "y",
    "modifiers": {
      "mandatory": ["control"],
      "optional": ["any"]
    }
  },
  "to": [
    {
      "key_code": "z",
      "modifiers": ["command", "shift"]
    }
  ]
}
```

And to add a specific rule for just one application, like my Chrome specific `Ctrl+T → Cmd+T `, there is a condition type similar to the one used for excluding an application:

```json
{
  "type": "frontmost_application_if",
  "bundle_identifiers": ["^com\\.google\\.Chrome$"]
}
```

### Wait, where did the device and application IDs come from?

Glad you asked. It would be super annoying if I had to go through a big list containing lots of different devices, search for a Glove80, and hope it was there and did not have multiple possible values just because the manufacturer changed something during production. Luckily, that is not the case. Karabiner-Elements comes with the **Karabiner-EventViewer**. This software allows me to trace the current inputs and see (among other things):

- Which device sent the input
- Which keycode was sent
- Which modifiers were pressed
- Which application is focused

For the device, it also shows the _vendor_id_ and _product_id_. So it's super easy to find the exact values for your setup. In my case:

```text
vendor_id:  5824
product_id: 10203
```

And for applications:

```text
com.mitchellh.ghostty
com.google.Chrome
```

It's also really useful for debugging and finding the names of keys if you want to remap some of the more obscure ones beyond `Ctrl` (what was the name of the key with `±` and `§` on a MacBook keyboard again? Right, of course: _non_us_backslash_).

I actually got somewhat lucky with the IDs. In theory, the keyboard does not necessarily have to use the same vendor_id and product_id for Bluetooth and cable connections. In my case, the Glove80 does, and I only need one object in the **identifiers** array. But even if it did not, I would just need to connect the Glove80 the other way, start the EventViewer, and press any key to find the data I need. I could then add a second object to that array, and it would work just as well as it does with one entry.

## Why not just flip Cmd and Ctrl everywhere?

Because the same shortcut can perform completely different tasks depending on where I press it. I want to decide which of those actions should be remapped instead of swapping the modifiers everywhere.

For example, in my usual shell setup, the `Ctrl`-based shortcuts behave like this:

```text
Ctrl+C → Cancel a running command
Ctrl+A → Jump to the start of the line
Ctrl+R → Search through the shell history
Ctrl+Z → Suspend the foreground process
```

Those examples come from different layers and are deliberately simplified. `Ctrl+C` and `Ctrl+Z` are normally handled as terminal control characters, while `Ctrl+A` and `Ctrl+R` are usually bindings in the shell's line editor. Programs can reinterpret them, and a process can even handle or ignore an interrupt. The important part for my setup is that Ghostty must receive the original `Ctrl` combination.

Remapping Control would fix copy and paste, but it would break these commands. And I don't want that. That is why my rule excludes Ghostty.

This may look a little inconsistent at first. I did all this work so that the Glove80 behaves on a Mac as it does on Windows, but in the terminal I deliberately do the opposite. For me, however, consistency is based on the action. Copying something should feel the same on both systems, and stopping a process should feel the same on both systems. Those are two different actions that just happen to use `Ctrl+C` by default.

## What about Neovim?

Excluding Ghostty also excludes every program running inside it, including Neovim. I use Neovim as my main way to edit code and write text in general (so yes, this blog post is being written in Neovim right now). So this is not a theoretical edge case but a large part of how I use Ghostty, and excluding it is exactly what I want for two related reasons.

First, Neovim already uses many `Ctrl` combinations for its own commands. By default, for example, `Ctrl+V` starts Visual Block mode when Neovim is in Normal mode. Translating it to `Cmd+V` would not make Neovim more consistent; it would simply remove a native Vim command that I use.

Second, I do not need desktop-style copy-and-paste shortcuts inside Neovim. I use Vim's own yank and put commands:

```text
y{motion} / yy → Yank text
p              → Put text
```

To connect those commands to the macOS clipboard, I tell Neovim to use the system clipboard as its default clipboard register:

```lua
vim.opt.clipboard = "unnamedplus"
```

This requires a working clipboard provider, which is available in my macOS setup. It also means that other operations affecting the default register can affect the system clipboard. That is normal Vim behavior, even though it is not exactly the same model as desktop copy and paste.

So leaving `Cmd` and `Ctrl` untouched inside Ghostty preserves both things I care about: native Neovim commands and the same Neovim experience on both operating systems.

## The one problem I caused myself

Of course, not everything worked without problems. And I'm sad to admit that the problem was me. After installing Karabiner-Elements and setting up my rules, I suddenly got

```text
§
```

when I wanted to type

```text
`
```

The reason was that I had told Karabiner-Elements that my virtual keyboard should use the `ISO` type instead of `ANSI`, which was simply a wrong assumption on my part that I had not researched. Switching to `ANSI` fixed the key in my combination of keyboard and input source. That does not make ANSI the right choice for every keyboard or locale, but since switching it, everything in my setup has worked as expected.

## My final setup

For now, I have the following configuration through my custom rules:

```text
Glove80
├── Windows
│     └── native Windows shortcuts
│
└── Mac
      ├── normal applications
      │     Ctrl+C/V/X/Z/Y/A/S/F
      │     → remapped shortcuts
      │
      ├── Chrome
      │     Ctrl+T → Cmd+T
      │
      ├── Ghostty
      │     → Control stays as before
      │
      └── Neovim in Ghostty
            → native Vim keybindings

MacBook keyboard
└── normal macOS mappings
```

## Was it worth the effort?

Totally. For one, the effort was really not that great. Writing this blog post about it is probably taking more time than installing and configuring Karabiner-Elements (especially if you let AI help you write the rules). Yes, doing the research to figure out that Karabiner-Elements is the best solution for me took some time, but still not too much.

In return, I finally get the feeling that I can switch between my devices on the fly without those annoying moments where copying something, selecting all, undo, redo, or something similar does not work. Of course, these are not big interruptions, I just have to do it again with the right combination, but each one is a small interruption to the flow of whatever I am actually doing at that moment.

The result is not one universal shortcut system for every application. It is just a setup in which the same action feels the same on both operating systems. Copying stays `Ctrl+C` on the Glove80, interrupting a process stays `Ctrl+C` in Ghostty, and Neovim continues to feel like Neovim. That is exactly the kind of consistency I wanted.

> **AI assistance:** I used AI to improve the grammar, spelling, and some wording in this post. All ideas, opinions, and substantive content are my own.
