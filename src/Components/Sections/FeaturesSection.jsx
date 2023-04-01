import React from "react";
import { FeaturesSectionData } from "../../Data/data";
import { AiOutlineCheck } from "react-icons/ai";

const FeaturesSection = () => {
  const { PlanFeatures } = FeaturesSectionData;
  return (
    <div className="bg-primary-clr p100-section">
      <div className="Wrapper">
        <h1 className="fw-500 text-5xl items-center secondary-clr leading-3">
          Features
        </h1>
        <div className="flex gap-8 flex-wrap">
          <div className="bg-orange-500 p-2 basis-[700px] ">
            <span>1</span>
          </div>
          <div className="flex gap-8 justify-between basis-[500px]">
            <div className="bg-orange-500 p-2 basis-[200px]">
              <span>2</span>
            </div>
            <div className="bg-orange-500 p-2 basis-[200px]">
              <span>3</span>
            </div>
            <div className="bg-orange-500 p-2 basis-[200px]">
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
//  <div className="flex md:flex-row md:text-left  text-center md:flex-nowrap flex-wrap gap-8  justify-center pb-6 pt-4">
//           <div className="md:basis-1/2 basis-1/1 bg-indigo-600">
//             <span className="fw-600 text-xl secondary-clr ">Plan Features</span>
//           </div>
//           <div className="md:basis-1/4 bg-indigo-600">
//             <span className="fw-600 text-xl secondary-clr ">Professional</span>
//           </div>
//           <div className="md:basis-1/4 bg-indigo-600">
//             <span className="fw-600 text-xl secondary-clr ">Premium</span>
//           </div>
//           <div className="md:basis-1/4 bg-indigo-600">
//             <span className="fw-600 text-xl secondary-clr ">Entreprise</span>
//           </div>
//         </div>
//         <hr />

//         <div className="pt-10">
//           <div className="flex text-center md:flex-row flex-col justify-center md:flex-nowrap flex-wrap gap-8">
//             <div>
//               <div className="md:basis-1/2 bg-orange-600">
//                 <span>Projects</span>
//               </div>
//             </div>
//             <div className="md:basis-1/4 basis-1/3 bg-orange-600">
//               <span>1</span>
//             </div>
//             <div className="md:basis-1/4 basis-1/3 bg-orange-600">
//               <span>2</span>
//             </div>
//             <div className="md:basis-1/4 basis-1/3 bg-orange-600">
//               <span>3</span>
//             </div>
//           </div>
//         </div>

{
  /* <div className="pt-10">
          {PlanFeatures.map((item, i) => {
            const { Professional, Premium, Entreprise, name } = item;
            return (
              <div
                key={i}
                className="flex md:flex-row md:no-wrap flex-col tex-center items-center justify-center gap-6"
              >
                <div className="basis-1/2">
                  <span className="pt-4 pb-10 block fw-400 text-xl secondary-clr">
                    {name}
                  </span>
                </div>
                <div className="md:basis-1/4 basis-1/2 bg-indigo-500 w-[20px]">
                  {Professional ? (
                    <AiOutlineCheck className="bg-[#FEF4E2] color4 rounded-full p-1 text-3xl" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="md:basis-1/4 basis-1/2 bg-indigo-500 w-[20px]">
                  {Premium ? (
                    <AiOutlineCheck className="bg-[#FEF4E2] color4 rounded-full p-1 text-3xl" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="md:basis-1/4 basis-1/2 bg-indigo-500 w-[20px]">
                  {Entreprise ? (
                    <AiOutlineCheck className="bg-[#FEF4E2] color4 rounded-full p-1 text-3xl" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div> */
}
