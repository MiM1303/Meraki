

const Process = () => {
    
    return (
      <div className="flex flex-col md:flex-row gap-20 mt-10 md:mt-20">
        {/* accordian */}
        <div>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300 py-6">
                    <input type="radio" name="my-accordion-4" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        How do I donate food?
                    </div>
                    <div className="collapse-content"> 
                    <p>Head over to the Add A Food section from the Navigation bar and fill in the information there!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300 py-6">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                        Can I add more than one food?
                    </div>
                    <div className="collapse-content"> 
                    <p>Of course! You can give away as much food as you want! The more the merrier!!!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300 py-6">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                        How can I request what food I need?
                    </div>
                    <div className="collapse-content"> 
                    <p>Click on view details on a food item and you will see the request button right there!</p>
                    </div>
                </div>
            </div>
        </div>  
        {/* Process */}
        <div className="flex flex-col gap-20 items-center justify-center p-6">
            {/* giver */}
            <div>
            <p className="text-xl mb-5">If you want to donate food:</p>
            <ul className="steps text-sm md:text-base">
                <li className="step step-warning">Register</li>
                <li className="step step-warning">Add A Food</li>
                <li className="step step-warning">Wait For Request</li>
                <li className="step step-warning">Handover</li>
            </ul>
            </div>
            {/* taker */}
            <div>
            <p className="text-xl mb-5">If you want to receive food:</p>
            <ul className="steps text-sm md:text-base">
                <li className="step step-warning">Register</li>
                <li className="step step-warning">Request A Food</li>
                <li className="step step-warning">Connect</li>
                <li className="step step-warning">Pickup</li>
            </ul>
            </div>
        </div>
      </div>
    );
  };
  
  export default Process;
  