import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let team = [];
    const teamMembersA = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    const teamA = {
      team: "TeamA",
      members: teamMembersA,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    team.push(teamA);
    const teamMembersB = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    const teamB = {
      team: "TeamB",
      members: teamMembersB,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    team.push(teamB);
    const teamMembersC = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    const teamC = {
      team: "TeamC",
      members: teamMembersC,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    team.push(teamC);
    const teamMembersD = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    const teamD = {
      team: "TeamD",
      members: teamMembersD,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    team.push(teamD);
    return team;
  }

  function handleTeamClick(e) {
    const transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === e.target.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedData(transformedGroupData);
    setTeam(e.target.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {item.team}
            </h4>
            <div
              id={`collapse_${item.team}`}
              className={item.collapsed ? "collapse" : ""}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
