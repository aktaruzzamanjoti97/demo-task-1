import Image from 'next/image';
import React from 'react'

const EmpowerBottom = () => {
  return (
    <div className="empower-bottom">
              <div className="row g-5">
                {[1, 2, 3, 4].map((i) => {
                  const titles = [
                    "Blockchain Infrastructure",
                    "Ensure Accessibility",
                    "Bridge Finance & Comm-erce",
                    "Champion Decentralization",
                  ];
                  const descriptions = [
                    "MetaFusion Labs is a blockchain solutions company officially registered in Panama, serving as the parent organization behind the ECM Ecosystem.",
                    "Make Web3 tools and platforms easy to use and available to everyone—businesses and individuals alike.",
                    "Develop robust systems capable of supporting large-scale dece-ntralized applications.",
                    "Promote transparent, decentralized technologies that empower users and remove centralized control.",
                  ];
                  return (
                    <div key={i} className="col-md-6 col-xl-3">
                      <div className={`single-empower-card single-empower-card-${i}`}>
                        <div className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start">
                          <div
                            className="empower-icon"
                            style={{ position: "relative", width: 64, height: 64 }}
                          >
                            <Image
                              src={`/assets/images/icon/power-${i}.png`}
                              alt={`Power ${i} Icon`}
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                          <h3 className="p-0 pt-md-3 pb-md-3">{titles[i - 1]}</h3>
                        </div>
                        <p>{descriptions[i - 1]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
  )
}

export default EmpowerBottom