import { Card } from '@/components/ui/card';

interface TimelineStepProps {
  step: {
    id: number;
    title: string;
    description: string;
    image: string;
    side: 'left' | 'right';
  };
  index: number;
  totalSteps: number;
}

export const TimelineStep = ({ step, index }: TimelineStepProps) => {
  const isLeft = step.side === 'left';
  const animationClass = isLeft ? 'slide-in-left' : 'slide-in-right';
  const delay = `${index * 0.2}s`;

  return (
    <div 
      className={`timeline-step ${animationClass} relative mb-24 md:mb-32`}
      style={{ transitionDelay: delay }}
    >
      {/* Mobile Layout - Stacked */}
      <div className="md:hidden flex flex-col items-center">
        <Card className="nature-card p-6 w-full max-w-sm">
          <div className="aspect-square rounded-lg overflow-hidden mb-4">
            <img 
              src={step.image} 
              alt={step.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="step-text text-xl font-bold text-primary mb-2">
              Step {step.id}: {step.title}
            </h3>
            <p className="step-text text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </Card>
      </div>

      {/* Desktop Layout - Alternating */}
      <div className="hidden md:block">
        <div className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <div className={`w-5/12 ${isLeft ? 'pr-16' : 'pl-16'}`}>
            <Card className="nature-card p-8">
              <div className="aspect-square rounded-xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={isLeft ? 'text-right' : 'text-left'}>
                <h3 className="step-text text-2xl font-bold text-primary mb-4">
                  Step {step.id}: {step.title}
                </h3>
                <p className="step-text text-muted-foreground leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Trail Marker Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 hidden md:block">
        <div className="w-6 h-6 bg-trail-brown rounded-full border-4 border-earth-cream shadow-lg pulse">
          <div className="w-full h-full bg-nature-gold rounded-full opacity-75"></div>
        </div>
      </div>
    </div>
  );
};