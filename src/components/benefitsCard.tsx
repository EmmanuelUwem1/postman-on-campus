

interface BenefitsCardProps {
  title: string;
  description: string;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({ title, description }) => {
  return (
    <div className="bg-[#FFFFFF] shadow-box relative w-full py-4 pl-4 pr-6 shadow-[-4px_-4px_10px_rgba(0,0,0,0.1)]">
      <span className="flex items-start justify-start text-xl text-[#2D2D2D] font-semibold flex-wrap w-full">
        <p className="inline">
          <b className="font-bold">{title}</b> {description}
        </p>
      </span>
    </div>
  );
};

export default BenefitsCard;