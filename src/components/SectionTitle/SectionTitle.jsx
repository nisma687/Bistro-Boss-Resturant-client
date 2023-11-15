
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-600 
              mb-2
              font-semibold">---{subHeading}---</p>
            <h2 className="text-2xl font-semibold 
            border-yellow-500 border-opacity-300
            py-4 
            border-y-4 uppercase">{heading}</h2>
            
        </div>
    );
};

export default SectionTitle;