import React from 'react';

const EducationalTeaser = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          A Glimpse Inside: The Educator's Toolkit
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A curated collection of frameworks, philosophies, and practices for holistic teaching and learning.
        </p>
      </header>

      {/* Grid of cards */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bloom's Taxonomy */}
          <div className="bg-card text-card-foreground rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Bloom's Taxonomy</h2>
              <p className="text-muted-foreground mb-4">
                Guide students from simple recall to innovative creation. Use this pyramid to craft objectives and assessments.
              </p>
              <div className="bg-muted h-40 rounded-lg flex items-center justify-center mb-4 text-muted-foreground border border-dashed border-border">
                <span className="text-sm">🧠 Bloom's Pyramid (Remember → Create)</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-secondary-foreground">
                  <span className="font-bold">Example:</span> "List plant parts" → "Design a self-sustaining garden."
                </p>
              </div>
            </div>
          </div>

          {/* Kolb's Experiential Learning Cycle */}
          <div className="bg-card text-card-foreground rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Kolb's Learning Cycle</h2>
              <p className="text-muted-foreground mb-4">
                Experience → Reflect → Conceptualize → Apply. Turn passive learning into active discovery.
              </p>
              <div className="bg-muted h-40 rounded-lg flex items-center justify-center mb-4 text-muted-foreground border border-dashed border-border">
                <span className="text-sm">🔄 Kolb's Cycle diagram</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-secondary-foreground">
                  <span className="font-bold">Example:</span> Visit a heritage site, journal, discuss, create a preservation project.
                </p>
              </div>
            </div>
          </div>

          {/* Gardner's Multiple Intelligences */}
          <div className="bg-card text-card-foreground rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Multiple Intelligences</h2>
              <p className="text-muted-foreground mb-4">
                Reach every learner through linguistic, logical, musical, spatial, and other intelligences.
              </p>
              <div className="bg-muted h-40 rounded-lg flex items-center justify-center mb-4 text-muted-foreground border border-dashed border-border">
                <span className="text-sm">🌈 Intelligence wheel</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-secondary-foreground">
                  <span className="font-bold">Example:</span> Analyze a poem, set it to music, draw an illustration.
                </p>
              </div>
            </div>
          </div>

          {/* Gagné's Nine Events */}
          <div className="bg-card text-card-foreground rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Gagné's Nine Events</h2>
              <p className="text-muted-foreground mb-4">
                A step‑by‑step checklist for effective instruction – from gaining attention to feedback.
              </p>
              <div className="bg-muted h-40 rounded-lg flex items-center justify-center mb-4 text-muted-foreground border border-dashed border-border">
                <span className="text-sm">📋 Nine events list</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-secondary-foreground">
                  <span className="font-bold">Example:</span> Start with a story, present content, guide practice, give feedback.
                </p>
              </div>
            </div>
          </div>

          {/* SAMR Model */}
          <div className="bg-card text-card-foreground rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">SAMR Model</h2>
              <p className="text-muted-foreground mb-4">
                Move from simple tech substitution (digital worksheet) to redefinition (student‑created videos).
              </p>
              <div className="bg-muted h-40 rounded-lg flex items-center justify-center mb-4 text-muted-foreground border border-dashed border-border">
                <span className="text-sm">📱 SAMR ladder</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-secondary-foreground">
                  <span className="font-bold">Example:</span> Substitution → Augmentation → Modification → Redefinition.
                </p>
              </div>
            </div>
          </div>

          {/* Ganbaru Method */}
          <div className="bg-card text-card-foreground rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Ganbaru (がんばる) Method</h2>
              <p className="text-muted-foreground mb-4">
                Japanese philosophy of perseverance. Effort over talent – “Do your best” not “Be the best”.
              </p>
              <div className="bg-muted h-40 rounded-lg flex items-center justify-center mb-4 text-muted-foreground border border-dashed border-border">
                <span className="text-sm">💪 Ganbatte!</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-secondary-foreground">
                  <span className="font-bold">Teacher:</span> “Try five more times. Your memory grows stronger.”
                </p>
              </div>
            </div>
          </div>

          {/* Kalaripayattu */}
          <div className="bg-card text-card-foreground rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Kalaripayattu</h2>
              <p className="text-muted-foreground mb-4">
                Ancient Indian martial art – develops strength, focus, self‑defence, and cultural pride.
              </p>
              <div className="bg-muted h-40 rounded-lg flex items-center justify-center mb-4 text-muted-foreground border border-dashed border-border">
                <span className="text-sm">🥋 Kalari posture / Marma points</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-secondary-foreground">
                  <span className="font-bold">Philosophy:</span> Physical strength, mental focus, inner discipline.
                </p>
              </div>
            </div>
          </div>

          {/* Pomodoro Technique */}
          <div className="bg-card text-card-foreground rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Pomodoro Technique</h2>
              <p className="text-muted-foreground mb-4">
                25 min focused work + 5 min break = <span className="italic">Ekagrata</span> (one‑pointed concentration).
              </p>
              <div className="bg-muted h-40 rounded-lg flex items-center justify-center mb-4 text-muted-foreground border border-dashed border-border">
                <span className="text-sm">🍅 Pomodoro timer</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-secondary-foreground">
                  <span className="font-bold">Rhythm:</span> 25′ work → 5′ break → repeat → long break.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / CTA */}
        <footer className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            …and many more: <span className="font-semibold text-primary">Backward Design, Inquiry‑Based Learning, UDL, Mastery Learning, Reflective Practice, Kaizen</span>.
          </p>
          <div className="mt-6">
            <a
              href="/path-to-your-full-handbook.pdf" // Replace with actual link
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-colors golden-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              📘 Dive into the full “Educational Thoughts.pdf”
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EducationalTeaser;