import { useParams } from "react-router-dom";
import data from "../data.json";
import { JobInfo } from "../Types";
import oval from "../../public/assets/Oval.svg";

const Job: React.FC<JobInfo> = () => {
  const { id } = useParams<{ id: string }>();

  const filteredData = data.filter((job) => job.id === parseInt(id!));
  return (
    <>
      <div className="flex flex-col items-center">
        {filteredData.map((data) => {
          return (
            <div
              key={data.id}
              className="w-[327px] rounded-[6px] bg-input flex flex-col items-center relative bottom-5 pt-[40px] dark:bg-input-dark tb:w-[689px] tb:pr-[40px] tb:pt-0 tb:h-[140px] tb:justify-center dk:w-[730px]"
            >
              <div
                style={{ backgroundColor: data.logoBackground }}
                className={`jobs-background w-[50px] h-[50px]  flex flex-col items-center rounded-[20px] justify-center absolute -top-6 z-10 tb:rounded-[0px] tb:top-0 tb:w-[140px] tb:h-[140px] tb:left-0 tb:rounded-l-[6px]`}
              >
                <img src={data.logo} alt="company logo" />
              </div>
              <div className="big tb:flex tb:items-center tb:justify-between tb:w-full">
                <div className="one tb:flex tb:flex-col tb:pl-[180px]">
                  <div className="name text-center">
                    <p className="text-[#19202D] text-[20px] font-bold dark:text-[#fff] tb:text-[24px]">
                      {data.company}
                    </p>
                  </div>
                  <div className="adress mt-[7px] text-center">
                    <p className="text-[#6E8098] text-[16px] font-normal">
                      {data.company}.com
                    </p>
                  </div>
                </div>
                <div className="two">
                  <div className="site-link mt-[27px] w-[147px] py-[16px] mb-[32px] text-center bg-site/10 rounded-[5px] dark:bg-site/10">
                    <a
                      href={data.website}
                      className="text-[#5964E0] text-[16px] font-bold "
                    >
                      Company Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <main className="flex flex-col items-center">
        {filteredData.map((info) => {
          return (
            <div className="w-[327px] bg-input rounded-[6px] py-[40px] px-[24px] dark:bg-input-dark tb:w-[689px] dk:w-[730px]">
              <div className="times flex items-center mt-[5px] gap-[12px]">
                <p className="text-[#6E8098] text-[16px] font-normal">
                  {info.postedAt}
                </p>
                <div className="oval w-[4px] h-[4px] bg-oval"></div>
                <p className="text-[#6E8098] text-[16px] font-normal">
                  {info.contract}
                </p>
              </div>
              <div className="positioning flex flex-col tb:flex-row tb:items-center tb:justify-between">
                <div className="position-location mt-[11px] flex flex-col gap-[7px]">
                  <p className="text-[#19202D] text-[18px] font-bold dark:text-[#fff] dk:text-[28px]">
                    {info.position}
                  </p>
                  <p className="text-[#5964E0] text-[14px] font-bold">
                    {info.location}
                  </p>
                </div>
                <div className="apply mt-[54px] tb:mt-0">
                  <button className="w-[279px] py-[16px] text-[16px] font-bold bg-site text-[#fff] rounded-[5px] tb:w-[141px]">
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="description mt-[32px]">
                <p className="text-[#6E8098] text-[16px] font-normal">
                  {info.description}
                </p>
              </div>
              <div className="requirements mt-[40px] flex flex-col gap-[28px]">
                <p className="text-[#19202D] text-[20px] font-bold dark:text-[#fff]">
                  Requirements
                </p>
                <p className="text-[#6E8098] text-[16px] font-normal">
                  {info.requirements.content}
                </p>
              </div>
              <div className="requirements-list">
                <ul className="mt-[32px] flex flex-col gap-[8px]">
                  {info.requirements.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[#6E8098] text-[16px] font-normal flex gap-[32px] items-start"
                      >
                        <img
                          src={oval}
                          alt="oval icon"
                          className="mt-[9px]"
                        />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="will-do mt-[40px] flex flex-col gap-[28px]">
                <p className="text-[#19202D] text-[20px] font-bold dark:text-[#fff]">
                  What You Will Do
                </p>
                <p className="text-[#6E8098] text-[16px] font-normal">
                  {info.role.content}
                </p>
              </div>
              <div className="will-do-list mt-[32px]">
                <ul className="list-decimal pl-[24px] flex flex-col gap-[8px] text-[#6E8098] text-[16px] font-normal">
                  {info.role.items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </main>

      <footer className="flex flex-col items-center mt-[64px] tb:flex-row tb:justify-center ">
        <div className="apply-now w-[375px] bg-input rounded-[6px] flex flex-col  items-center py-[25px] dark:bg-input-dark tb:flex-row tb:w-[768px] tb:items-center tb:justify-between tb:px-[40px] dk:w-[1440px]">
          <div className="dvi mb:block tb:flex tb:flex-row tb:items-center tb:justify-between tb:w-full tb:block dk:block dk:w-[730px] dk:flex dk:flex-row dk:justify-center dk:gap-[330px] dk:w-full">
            <div className="text mb:hidden tb:block flex flex-col">
              {filteredData.map((job) => {
                return (
                  <div key={job.id}>
                    <p className="text-[#19202D] text-[20px] font-bold dark:text-[#fff]">
                      {job.position}
                    </p>
                    <p className="text-[#6E8098] text-[16px] font-normal">
                      So Digital Inc.
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="apply">
              <button className="w-[327px] py-[16px] text-[#fff] text-[16px] font-bold bg-site rounded-[5px] tb:w-[141px] ">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Job;
