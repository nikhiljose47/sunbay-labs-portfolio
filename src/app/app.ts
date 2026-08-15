import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('root', { static: true }) rootRef!: ElementRef<HTMLElement>;

  private observer?: IntersectionObserver;

  protected readonly companyName = 'Sunbay Labs';
  protected readonly tagline = 'Innovate. Build. Elevate.';
  protected readonly heroCopy =
    "We're a founder-led product studio that builds our own startups from scratch — " +
    'thinking, designing, and shipping like the innovative companies we admire.';
  protected readonly year = 2026;

  protected readonly nav = [
    { label: 'About', href: '#about' },
    { label: 'Approach', href: '#approach' },
    { label: 'Products', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  protected readonly stats = [
    { value: '3', label: 'Co-founders' },
    { value: '3', label: 'Products shipped' },
    { value: '1', label: 'HQ in Bengaluru' },
    { value: '100%', label: 'Founder-led' },
  ];

  protected readonly approach = [
    {
      icon: '💡',
      title: 'Innovation-first',
      description: 'We chase ideas most teams call "too ambitious" and ship them anyway.',
    },
    {
      icon: '⚡',
      title: 'Move fast, ship faster',
      description: 'Small team, no bureaucracy — from idea to live product in weeks, not quarters.',
    },
    {
      icon: '🚀',
      title: 'Founder-led execution',
      description: 'Every product is built, owned, and iterated on directly by the founders.',
    },
    {
      icon: '❤️',
      title: 'Obsessed with users',
      description: 'We build things we would use ourselves — free, simple, and genuinely useful.',
    },
  ];

  protected readonly services = [
    {
      title: 'Product Engineering',
      description: 'End-to-end design and development of web and mobile products, from prototype to production.',
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud architecture, CI/CD pipelines, and reliability engineering across AWS, GCP, and Azure.',
    },
    {
      title: 'AI & Data Solutions',
      description: 'Practical machine learning, data pipelines, and LLM-powered features built for real business outcomes.',
    },
    {
      title: 'UI/UX Design',
      description: 'Research-driven interface design that balances usability, accessibility, and brand identity.',
    },
  ];

  protected readonly work = [
    {
      title: 'Scholo',
      category: 'EdTech · Online Tutoring',
      description: 'A free online tutoring platform connecting students with tutors for live, personalised learning.',
      link: 'https://scholo.co.in',
      icon: '📚',
    },
    {
      title: 'Tagmate',
      category: 'Social · Community App',
      description: 'A social media app focused on helping people discover and connect around shared services and interests.',
      link: null,
      icon: '💬',
    },
    {
      title: 'Batteie',
      category: 'HealthTech · All-in-one App',
      description: 'An all-in-one health app for tracking wellness and vitals while staying connected with your care circle.',
      link: null,
      icon: '❤️‍🩹',
    },
  ];

  protected readonly team = [
    { name: 'Nikhil J', role: 'Co-Founder', tag: 'NIT' },
    { name: 'Jidhu Krishnan', role: 'Co-Founder', tag: 'NIT' },
    { name: 'Arjun Kumar', role: 'Co-Founder', tag: 'IIT' },
  ];

  protected readonly values = [
    { title: 'Craft', description: 'We sweat the details others skip, because quality compounds.' },
    { title: 'Transparency', description: 'Clear communication and honest timelines, every step of the way.' },
    { title: 'Ownership', description: 'We treat every project like it is our own product.' },
  ];

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
    const targets = this.rootRef.nativeElement.querySelectorAll('.reveal');
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => this.observer?.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
