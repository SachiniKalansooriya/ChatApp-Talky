const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div className="flex items-center justify-center p-12 bg-base-200">
        <div className="max-w-md text-center">
          <div className="grid grid-cols-3 gap-3 mb-8">
            
          </div>
          <h2 className="mb-4 text-2xl italic font-bold">{title}</h2>
          <p className="italic text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;
