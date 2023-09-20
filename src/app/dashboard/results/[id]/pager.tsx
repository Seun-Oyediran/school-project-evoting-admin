import React from 'react';
import { SearchBar } from '@/components';
import { resultColors } from '@/utils/static';

const Page = () => {
  return (
    <div>
      <div className="recent__elections__title mb-4 mt">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Presidential</h3>

          <div>
            <SearchBar placeholder="Search Candidates" />
          </div>
        </div>
      </div>

      <div className="voting__app__result__table">
        <h4>Candidate List</h4>
        <div className="candidate__table">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Pos</th>
                <th className="" colSpan={2} scope="col">
                  Name
                </th>
                <th scope="col">Party</th>
                <th scope="col">Reg No</th>
                <th className="">Votes</th>
                <th scope="col">Status Bar</th>
              </tr>
            </thead>

            <tbody>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td colSpan={2}>Oladeji Raji</td>
                    <td className="align-middle">
                      <div className="d-flex gap-2 align-items-center">
                        <div className="img-con">
                          <img src="/images/party_logo.png" alt="party" className="w-100" />
                        </div>
                        APC
                      </div>
                    </td>
                    <td>130293</td>
                    <td>176</td>
                    <td className="align-middle">
                      <div className="progress__bar">
                        <div
                          className="progress"
                          style={{
                            background: resultColors[i % resultColors.length],
                            width: '50%',
                          }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
