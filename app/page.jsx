export default function CFDLeadLandingPage() {
  const questions = [
    {
      question: 'Jak reagujesz na ryzyko?',
      answers: [
        { text: 'Unikam ryzyka', points: 0 },
        { text: 'Akceptuję umiarkowane ryzyko', points: 1 },
        { text: 'Rozumiem ryzyko i potrafię nim zarządzać', points: 2 },
      ],
    },
    {
      question: 'Twoja pozycja spada o 15%. Co robisz?',
      answers: [
        { text: 'Panikuję', points: 0 },
        { text: 'Analizuję sytuację', points: 1 },
        { text: 'Trzymam się planu', points: 2 },
      ],
    },
    {
      question: 'Czy masz dyscyplinę finansową?',
      answers: [
        { text: 'Nie', points: 0 },
        { text: 'Czasami', points: 1 },
        { text: 'Tak', points: 2 },
      ],
    },
    {
      question: 'Jak podchodzisz do nauki tradingu?',
      answers: [
        { text: 'Nie lubię się uczyć', points: 0 },
        { text: 'Poznaję podstawy', points: 1 },
        { text: 'Regularnie rozwijam wiedzę', points: 2 },
      ],
    },
    {
      question: 'Czy kontrolujesz emocje podczas decyzji?',
      answers: [
        { text: 'Nie', points: 0 },
        { text: 'Czasami', points: 1 },
        { text: 'Tak', points: 2 },
      ],
    },
  ];

  const [started, setStarted] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showLeadForm, setShowLeadForm] = React.useState(false);
  const [finished, setFinished] = React.useState(false);

  const handleAnswer = (points) => {
    const updatedScore = score + points;
    setScore(updatedScore);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const submitLead = (e) => {
    e.preventDefault();
    setFinished(true);
  };

  const resultText = () => {
    if (score <= 4) {
      return {
        title: 'Musisz jeszcze popracować 😅',
        description:
          'Trading CFD wymaga cierpliwości, kontroli emocji i odpowiedniego zarządzania ryzykiem.',
      };
    }

    if (score <= 7) {
      return {
        title: '🔥 Masz potencjał!',
        description:
          'Twoje podejście wygląda dobrze. Rozwijaj wiedzę i doświadczenie.',
      };
    }

    return {
      title: '🚀 Gratulacje! Masz mindset tradera CFD!',
      description:
        'Masz odpowiednie podejście do inwestowania i potencjał do tradingu CFD.',
    };
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(0,255,120,0.3),transparent_40%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-10">
        {!started ? (
          <div className="text-center pt-20">
            <div className="inline-block px-4 py-2 rounded-full border border-green-500 text-green-400 text-sm mb-6">
              CFD CHALLENGE
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Sprawdź czy
              <span className="text-green-400 block">
                nadajesz się
              </span>
              do tradingu CFD
            </h1>

            <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-10">
              Odpowiedz na 5 prostych pytań i odkryj, czy masz mindset tradera.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-bold mb-2">60 sekund</div>
                <div className="text-zinc-400 text-sm">
                  Szybki test mindsetu inwestora
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                <div className="text-4xl mb-3">📈</div>
                <div className="font-bold mb-2">Realny wynik</div>
                <div className="text-zinc-400 text-sm">
                  Dowiedz się, czy masz potencjał
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                <div className="text-4xl mb-3">🔥</div>
                <div className="font-bold mb-2">Trading CFD</div>
                <div className="text-zinc-400 text-sm">
                  Sprawdź swoje podejście do rynku
                </div>
              </div>
            </div>

            <button
              onClick={() => setStarted(true)}
              className="bg-green-500 hover:bg-green-400 text-black text-xl font-black px-10 py-5 rounded-3xl transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Rozpocznij Challenge 🚀
            </button>
          </div>
        ) : !showLeadForm ? (
          <div className="pt-10">
            <div className="mb-8">
              <div className="flex justify-between mb-3 text-sm text-zinc-400">
                <span>Pytanie {currentQuestion + 1} z {questions.length}</span>
                <span>
                  {Math.round(
                    ((currentQuestion + 1) / questions.length) * 100
                  )}
                  %
                </span>
              </div>

              <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-green-500 h-4 rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
                {questions[currentQuestion].question}
              </h2>

              <div className="grid gap-5">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer.points)}
                    className="bg-zinc-800 hover:bg-green-500 hover:text-black text-left rounded-2xl p-5 transition-all duration-300 font-semibold text-lg"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : !finished ? (
          <div className="max-w-xl mx-auto pt-16">
            <div className="bg-zinc-900 border border-green-500 rounded-[32px] p-10 text-center shadow-2xl">
              <div className="text-6xl mb-6">🎯</div>

              <h2 className="text-4xl font-black mb-4">
                Twój wynik jest gotowy!
              </h2>

              <p className="text-zinc-400 text-lg mb-8">
                Zostaw dane i odkryj, czy masz potencjał tradera CFD.
              </p>

              <form onSubmit={submitLead} className="grid gap-5">
                <input
                  type="text"
                  placeholder="Imię"
                  className="bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500"
                  required
                />

                <input
                  type="tel"
                  placeholder="Telefon"
                  className="bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500"
                  required
                />

                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-black font-black text-lg py-5 rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  Pokaż wynik 🔥
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto pt-16 text-center">
            <div className="bg-zinc-900 border border-green-500 rounded-[32px] p-10 shadow-2xl">
              <div className="text-8xl mb-6">🎉</div>

              <h2 className="text-5xl font-black text-green-400 mb-6 leading-tight">
                {resultText().title}
              </h2>

              <p className="text-zinc-300 text-xl mb-10 leading-relaxed">
                {resultText().description}
              </p>

              <div className="bg-black border border-zinc-800 rounded-3xl p-8 mb-10">
                <div className="text-zinc-500 mb-3 uppercase tracking-widest text-sm">
                  Twój wynik
                </div>

                <div className="text-7xl font-black text-green-400">
                  {score}/10
                </div>
              </div>

              <button className="bg-green-500 hover:bg-green-400 text-black font-black px-10 py-5 rounded-3xl text-xl transition-all duration-300 hover:scale-105">
                Skontaktuj się z nami 📈
              </button>

              <div className="mt-10 text-xs text-zinc-600 leading-relaxed">
                CFD są instrumentami złożonymi i wiążą się z wysokim ryzykiem szybkiej utraty środków z powodu dźwigni finansowej.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
