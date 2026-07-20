import { useState, type ReactNode } from 'react';

import { AppShell } from '@astryxdesign/core/AppShell';
import { Button } from '@astryxdesign/core/Button';
import { Card } from '@astryxdesign/core/Card';
import { Grid } from '@astryxdesign/core/Grid';
import { Icon } from '@astryxdesign/core/Icon';
import { Heading } from '@astryxdesign/core/Heading';
import { HStack } from '@astryxdesign/core/HStack';
import { Link } from '@astryxdesign/core/Link';
import { Section } from '@astryxdesign/core/Section';
import { Text } from '@astryxdesign/core/Text';
import { TopNav } from '@astryxdesign/core/TopNav';
import { VStack } from '@astryxdesign/core/VStack';

import { defaultLanguage, languageStorageKey, storedLanguage, type Language } from './lib/language';

type StorageLike = Pick<Storage, 'getItem' | 'setItem'>;

type WorkflowStep = { id: string; title: string; body: string; icon: 'wrench' | 'viewColumns' | 'checkDouble' };

type Copy = {
  nav: { services: string; proof: string; approach: string; contact: string };
  eyebrow: string;
  title: string;
  introduction: string;
  cta: string;
  operatingTitle: string;
  operatingBody: string;
  workflow: readonly WorkflowStep[];
  servicesTitle: string;
  services: readonly { id: string; title: string; body: string }[];
  proofTitle: string;
  proof: readonly { id: string; title: string; body: string }[];
  approachTitle: string;
  approach: string;
  capabilityTitle: string;
  capabilityGroups: readonly { title: string; items: readonly string[] }[];
  contactTitle: string;
  contactBody: string;
  legal: { imprint: string; privacy: string };
};

const copy: Record<Language, Copy> = {
  en: {
    nav: { services: 'Services', proof: 'Proof', approach: 'Approach', contact: 'Contact' },
    eyebrow: 'Freelance Consultant · Remote · Germany / EU',
    title: 'Platform & AI Engineer',
    introduction: 'I’m Robin Maasjosthusmann, a freelance consultant helping teams turn product bets into operable software—through dependable delivery paths, governed AI capability, and technical decisions that survive contact with reality.',
    cta: 'Start a Conversation',
    operatingTitle: 'A delivery system, not a collection of tools.',
    operatingBody: 'The goal is simple: turn a risky product decision into a small, reviewable, observable change the team can own after I leave.',
    workflow: [
      { id: '01', title: 'Frame the Constraint', body: 'Find the irreducible product, operational, and ownership constraints before choosing technology.', icon: 'wrench' },
      { id: '02', title: 'Make the Path Reviewable', body: 'Deliver a narrow end-to-end change with explicit controls, verification, and a clear rollback story.', icon: 'viewColumns' },
      { id: '03', title: 'Leave the Team Stronger', body: 'Document the decision, expose the operational signals, and make the next change easier than the first.', icon: 'checkDouble' }
    ],
    servicesTitle: 'Where I’m Useful',
    services: [
      { id: '01', title: 'Platform Delivery', body: 'Secure, repeatable delivery from repository to production—with infrastructure, observability, and an operating model the team can own.' },
      { id: '02', title: 'AI Platform Engineering', body: 'Practical AI foundations: provider integration, access controls, cost visibility, and a delivery practice that remains accountable.' },
      { id: '03', title: 'Technical Advisory', body: 'Clear choices under real constraints. I turn ambiguous technical problems into focused decisions and a workable delivery sequence.' }
    ],
    proofTitle: 'Selected Operational Work',
    proof: [
      { id: '01', title: 'Governed Delivery Path', body: 'Maintained internal GitHub Actions runners and a secured catalogue of internally reviewed actions for a company-wide engineering workflow.' },
      { id: '02', title: 'Reviewable Infrastructure', body: 'Maintains production Terraform Enterprise/Cloud code and state-backed infrastructure changes, with reviewable plans and operational ownership.' },
      { id: '03', title: 'Controlled AI Gateway', body: 'Built and maintains a central LLM gateway for AWS Bedrock providers, with usage, cost, and access controls built into the platform.' }
    ],
    approachTitle: 'Agent-Assisted. Never Unaccountable.',
    approach: 'Claude Code, Pi, and OpenCode accelerate the work—not the responsibility. Agents produce reviewable changes; I understand the architecture and every changed line before a human-facing pull request exists.',
    capabilityTitle: 'Working Surface',
    capabilityGroups: [
      { title: 'Delivery', items: ['GitHub Actions', 'Docker', 'Terraform Enterprise / Cloud'] },
      { title: 'Operation', items: ['Kubernetes / OpenShift', 'OpenTelemetry', 'Grafana Cloud', 'Prometheus', 'Loki'] },
      { title: 'AI & Data', items: ['Python', 'PostgreSQL', 'AWS Bedrock'] }
    ],
    contactTitle: 'A Product Decision Should Not Become a Platform Emergency.',
    contactBody: 'Working through a product, platform, AI, or delivery decision? If the next step deserves a clear owner, let’s make it concrete.',
    legal: { imprint: 'Imprint', privacy: 'Privacy' }
  },
  de: {
    nav: { services: 'Leistungen', proof: 'Erfahrung', approach: 'Arbeitsweise', contact: 'Kontakt' },
    eyebrow: 'Freiberuflicher Consultant · Remote · Deutschland / EU',
    title: 'Plattform- & AI-Engineer',
    introduction: 'Ich bin Robin Maasjosthusmann, freiberuflicher Consultant für Teams, die Produktideen in betreibbare Software verwandeln wollen—mit belastbaren Delivery-Wegen, kontrollierter AI-Funktionalität und technischen Entscheidungen, die in der Realität bestehen.',
    cta: 'Gespräch Starten',
    operatingTitle: 'Ein Delivery-System, keine Sammlung von Tools.',
    operatingBody: 'Das Ziel ist einfach: Eine riskante Produktentscheidung wird zu einer kleinen, reviewbaren und beobachtbaren Änderung, die das Team auch ohne mich tragen kann.',
    workflow: [
      { id: '01', title: 'Constraint Klären', body: 'Produkt-, Betriebs- und Ownership-Constraints identifizieren, bevor Technologie gewählt wird.', icon: 'wrench' },
      { id: '02', title: 'Weg Reviewbar Machen', body: 'Eine schmale End-to-End-Änderung mit expliziten Kontrollen, Verifikation und klarem Rollback liefern.', icon: 'viewColumns' },
      { id: '03', title: 'Team Stärker Hinterlassen', body: 'Entscheidung dokumentieren, operative Signale sichtbar machen und die nächste Änderung leichter als die erste machen.', icon: 'checkDouble' }
    ],
    servicesTitle: 'Wobei Ich Helfe',
    services: [
      { id: '01', title: 'Plattform-Delivery', body: 'Sichere, wiederholbare Delivery vom Repository bis in die Produktion—mit Infrastruktur, Observability und einem Betriebsmodell, das das Team selbst tragen kann.' },
      { id: '02', title: 'AI-Plattform-Engineering', body: 'Pragmatische Grundlagen für AI: Provider-Integration, Zugriffskontrollen, Kostentransparenz und eine Delivery-Praxis mit klarer Verantwortung.' },
      { id: '03', title: 'Technische Beratung', body: 'Klare Entscheidungen unter echten Constraints. Ich mache aus unscharfen technischen Problemen fokussierte Entscheidungen und eine umsetzbare Lieferreihenfolge.' }
    ],
    proofTitle: 'Ausgewählte Operative Arbeit',
    proof: [
      { id: '01', title: 'Kontrollierter Delivery-Weg', body: 'Betreut interne GitHub-Actions-Runner sowie einen sicherheitsgeprüften Katalog intern bereitgestellter Actions für unternehmensweite Engineering-Workflows.' },
      { id: '02', title: 'Reviewbare Infrastruktur', body: 'Betreut produktiven Terraform-Enterprise-/Cloud-Code und zustandsbasierte Infrastrukturänderungen mit reviewbaren Plänen und operativer Verantwortung.' },
      { id: '03', title: 'Kontrolliertes AI-Gateway', body: 'Entwickelt und betreut ein zentrales LLM-Gateway für AWS-Bedrock-Provider mit integrierten Nutzungs-, Kosten- und Zugriffskontrollen.' }
    ],
    approachTitle: 'Agent-Unterstützt. Nie Ohne Verantwortung.',
    approach: 'Claude Code, Pi und OpenCode beschleunigen die Arbeit—nicht die Verantwortung. Agents erzeugen reviewbare Änderungen; bevor ein Pull Request für andere Menschen entsteht, verstehe ich die Architektur und jede geänderte Zeile.',
    capabilityTitle: 'Arbeitsfelder',
    capabilityGroups: [
      { title: 'Delivery', items: ['GitHub Actions', 'Docker', 'Terraform Enterprise / Cloud'] },
      { title: 'Betrieb', items: ['Kubernetes / OpenShift', 'OpenTelemetry', 'Grafana Cloud', 'Prometheus', 'Loki'] },
      { title: 'AI & Daten', items: ['Python', 'PostgreSQL', 'AWS Bedrock'] }
    ],
    contactTitle: 'Eine Produktentscheidung Darf Nicht Zum Plattform-Notfall Werden.',
    contactBody: 'Ihr arbeitet an einer Produkt-, Plattform-, AI- oder Delivery-Entscheidung? Wenn der nächste Schritt klare Verantwortung verdient, machen wir ihn konkret.',
    legal: { imprint: 'Impressum', privacy: 'Datenschutz' }
  }
};

function ContentFrame({ children }: { children: ReactNode }) {
  return <HStack hAlign="center" width="100%"><VStack width="100%" maxWidth={1080}>{children}</VStack></HStack>;
}

export function App({
  browserLanguages = navigator.languages,
  storage = window.localStorage
}: {
  browserLanguages?: readonly string[];
  storage?: StorageLike;
}) {
  const [language, setLanguage] = useState<Language>(() => storedLanguage(storage) ?? defaultLanguage(browserLanguages));
  const content = copy[language];

  function selectLanguage(nextLanguage: Language) {
    storage.setItem(languageStorageKey, nextLanguage);
    setLanguage(nextLanguage);
  }

  return (
    <AppShell
      contentPadding={0}
      height="auto"
      topNav={
        <TopNav
          heading={<Text type="label" weight="bold">Robin Maasjosthusmann</Text>}
          startContent={<HStack gap={2} wrap="wrap"><Link href="#services">{content.nav.services}</Link><Link href="#proof">{content.nav.proof}</Link><Link href="#approach">{content.nav.approach}</Link></HStack>}
          endContent={<HStack gap={1}><Button label="Deutsch" variant={language === 'de' ? 'primary' : 'ghost'} onClick={() => selectLanguage('de')}>DE</Button><Button label="English" variant={language === 'en' ? 'primary' : 'ghost'} onClick={() => selectLanguage('en')}>EN</Button></HStack>}
        />
      }
    >
      <VStack gap={0}>
        <Section variant="transparent" padding={10}>
          <ContentFrame>
            <Grid columns={{ minWidth: 280, max: 2 }} gap={6} align="center">
              <VStack gap={4}>
                <Text type="label" color="accent" weight="bold">{content.eyebrow}</Text>
                <Heading level={1} type="display-1" textWrap="balance">{content.title}</Heading>
                <Text type="large" as="p" color="secondary">{content.introduction}</Text>
                <Link href="mailto:hello@maasjosthusmann.de" isStandalone hasUnderline>{content.cta}</Link>
              </VStack>
              <Card padding={6} variant="muted" elevation="low">
                <VStack gap={4}>
                  <Text type="code" color="accent">OPERATING_MODEL / 01</Text>
                  <Heading level={2} textWrap="balance">{content.operatingTitle}</Heading>
                  <Text as="p" color="secondary">{content.operatingBody}</Text>
                  <VStack gap={3}>{content.workflow.map((step) => <HStack key={step.id} gap={2} align="start"><Icon icon={step.icon} color="accent" size="sm" /><VStack gap={0.5}><Text type="label" weight="bold">{step.id} · {step.title}</Text><Text as="p" type="supporting" color="secondary">{step.body}</Text></VStack></HStack>)}</VStack>
                </VStack>
              </Card>
            </Grid>
          </ContentFrame>
        </Section>
        <Section id="services" padding={8} variant="muted">
          <ContentFrame>
            <VStack gap={5}>
              <Text type="code" color="accent">01 / {content.nav.services.toUpperCase()}</Text>
              <Heading level={2} type="display-2" textWrap="balance">{content.servicesTitle}</Heading>
              <Grid columns={{ minWidth: 280, max: 3 }} gap={3}>{content.services.map((service) => <Card key={service.id} padding={5} variant="transparent"><VStack gap={4}><Text type="code" color="accent">{service.id}</Text><Heading level={3}>{service.title}</Heading><Text as="p" color="secondary">{service.body}</Text></VStack></Card>)}</Grid>
            </VStack>
          </ContentFrame>
        </Section>
        <Section id="proof" padding={8}>
          <ContentFrame>
            <VStack gap={5}>
              <Text type="code" color="accent">02 / {content.nav.proof.toUpperCase()}</Text>
              <Heading level={2} type="display-2" textWrap="balance">{content.proofTitle}</Heading>
              <Grid columns={{ minWidth: 280, max: 3 }} gap={4}>{content.proof.map((item) => <VStack key={item.id} gap={3}><Text type="display-2" color="accent">{item.id}</Text><Heading level={3}>{item.title}</Heading><Text as="p" color="secondary">{item.body}</Text></VStack>)}</Grid>
            </VStack>
          </ContentFrame>
        </Section>
        <Section id="approach" padding={8} variant="muted"><ContentFrame><Grid columns={{ minWidth: 280, max: 2 }} gap={6} align="center"><VStack gap={3}><Text type="code" color="accent">03 / {content.nav.approach.toUpperCase()}</Text><Heading level={2} type="display-2" textWrap="balance">{content.approachTitle}</Heading></VStack><Text as="p" type="large" color="secondary">{content.approach}</Text></Grid></ContentFrame></Section>
        <Section padding={8}><ContentFrame><VStack gap={4}><Text type="code" color="accent">04 / CAPABILITY</Text><Heading level={2}>{content.capabilityTitle}</Heading><Grid columns={{ minWidth: 280, max: 3 }} gap={3}>{content.capabilityGroups.map((group) => <VStack key={group.title} gap={2}><Text type="label" color="accent" weight="bold">{group.title}</Text><VStack gap={1}>{group.items.map((item) => <Text key={item} type="code" color="secondary">{item}</Text>)}</VStack></VStack>)}</Grid></VStack></ContentFrame></Section>
        <Section id="contact" padding={10} variant="muted"><ContentFrame><Card padding={8} variant="blue" elevation="low"><VStack gap={4}><Text type="code">05 / {content.nav.contact.toUpperCase()}</Text><Heading level={2} type="display-2" textWrap="balance">{content.contactTitle}</Heading><Text as="p" type="large">{content.contactBody}</Text><Link href="mailto:hello@maasjosthusmann.de" isStandalone hasUnderline>{content.cta}</Link><HStack gap={2} wrap="wrap"><Link href="/impressum/">{content.legal.imprint}</Link><Link href="/privacy/">{content.legal.privacy}</Link><Link href="https://github.com/RobinMaas95/" isExternalLink>GitHub</Link><Link href="https://www.linkedin.com/in/robin-maasjosthusmann/" isExternalLink>LinkedIn</Link></HStack></VStack></Card></ContentFrame></Section>
      </VStack>
    </AppShell>
  );
}
