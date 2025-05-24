import { getSonderMembers } from "./services/api";
import { useState, useEffect } from "react";
import Character from "./components/Character";
import LevelTotal from "./components/LevelTotal";
import './css/App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  var guildLevel = 0;
  useEffect(() => {
    const loadSonderMember = async () => {
      try {
        const sonderMembers = await getSonderMembers();
        
        const sortedMembers = sonderMembers.sort((a,b) => {
          return  b.character.level- a.character.level 
        });
        setMembers(sortedMembers);
      } catch (err) {
        console.log(err);
        setError("Failed to get member list from guild");
      } finally {
        setLoading(false);
      }
    };
    loadSonderMember();
  }, []);
  members.forEach(totalLevels)
  function totalLevels(item) {
    if(item.rank ==2 || item.rank == 0){
      guildLevel = guildLevel+item.character.level
    }
  }
  
  return (
    <div className="container">
      <div className="member-listing row">
        <h1>Sonder Hardcore Leveling Roster</h1>
        <h2>Total Guild Level: {guildLevel}</h2>
        {members.map((member) => (
          <>
          <Character member={member} key={member.character.name} />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
