import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/Mascot";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingElements } from "@/components/FloatingElements";
import { useNavigate, useParams } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const Quiz = () => {
  const navigate = useNavigate();
  const { category, level } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  // Sample questions (in real app, fetch based on category and level)
  const questions: Question[] = [
    {
      id: 1,
      question: "Apa fungsi dari tag <div> dalam HTML?",
      options: [
        "Membuat tabel",
        "Container untuk grouping elemen",
        "Membuat gambar",
        "Membuat link"
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "CSS singkatan dari?",
      options: [
        "Computer Style Sheets",
        "Creative Style System",
        "Cascading Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "Mana yang BUKAN tipe data dalam JavaScript?",
      options: [
        "String",
        "Boolean",
        "Character",
        "Number"
      ],
      correctAnswer: 2,
    },
    {
      id: 4,
      question: "Apa fungsi console.log() dalam JavaScript?",
      options: [
        "Menghapus code",
        "Menampilkan output di console",
        "Membuat variabel",
        "Membuat function"
      ],
      correctAnswer: 1,
    },
    {
      id: 5,
      question: "Tag HTML mana yang digunakan untuk membuat heading terbesar?",
      options: [
        "<h6>",
        "<heading>",
        "<h1>",
        "<head>"
      ],
      correctAnswer: 2,
    },
  ];

  const totalQuestions = questions.length;

  // Timer countdown
  useEffect(() => {
    if (!isPaused && timer > 0 && selectedAnswer === null) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0 && selectedAnswer === null) {
      // Auto submit wrong answer when time's up
      handleAnswer(null);
    }
  }, [timer, isPaused, selectedAnswer]);

  const handleAnswer = (answerIndex: number | null) => {
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    setAnswers([...answers, isCorrect]);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    // Play sound effect (mock)
    console.log(isCorrect ? "🎵 Ding! Correct sound" : "🎵 Bloop! Wrong sound");

    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setTimer(5);
      } else {
        // Quiz finished, navigate to results
        navigate("/quiz-result", {
          state: {
            score,
            total: totalQuestions,
            answers,
            category,
            level,
          },
        });
      }
    }, 1500);
  };

  const currentQ = questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
      <FloatingElements />
      <MusicToggle />
      
      <div className="relative z-10 w-full max-w-3xl">
        {/* Header with progress */}
        <div className="mb-8 animate-pop-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Mascot size="sm" mood="thinking" animate={false} />
              <span className="text-lg font-semibold">
                Soal {currentQuestion + 1} dari {totalQuestions}
              </span>
            </div>
            <Button
              onClick={() => setIsPaused(!isPaused)}
              size="icon"
              variant="outline"
              className="rounded-full"
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </Button>
          </div>
          <Progress value={progressPercent} className="h-3" />
        </div>

        {/* Timer Circle */}
        <div className="flex justify-center mb-8 animate-pop-in" style={{ animationDelay: "0.1s" }}>
          <div className={`relative w-24 h-24 rounded-full ${timer <= 2 ? 'bg-destructive' : 'bg-primary'} flex items-center justify-center animate-pulse-glow`}>
            <span className="text-4xl font-bold text-white">{timer}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bubble-card p-8 mb-6 animate-pop-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            {currentQ.question}
          </h2>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-4">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQ.correctAnswer;
              const showResult = selectedAnswer !== null;

              let buttonClass = "bubble-card p-6 text-left w-full transition-all duration-300 ";
              
              if (showResult) {
                if (isSelected && isCorrect) {
                  buttonClass += "bg-success text-success-foreground border-2 border-success";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "bg-destructive text-destructive-foreground border-2 border-destructive animate-jiggle";
                } else if (isCorrect) {
                  buttonClass += "bg-success text-success-foreground border-2 border-success";
                } else {
                  buttonClass += "opacity-50";
                }
              } else {
                buttonClass += "hover:scale-105 hover:bg-primary/10";
              }

              return (
                <button
                  key={index}
                  onClick={() => selectedAnswer === null && handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={buttonClass}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold shrink-0">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="font-semibold text-lg">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mascot reaction */}
        {selectedAnswer !== null && (
          <div className="text-center animate-pop-in">
            {selectedAnswer === currentQ.correctAnswer ? (
              <p className="text-2xl font-bold text-success">🎉 Benar! Hebat!</p>
            ) : (
              <p className="text-2xl font-bold text-destructive">😅 Ups! Belum tepat!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
