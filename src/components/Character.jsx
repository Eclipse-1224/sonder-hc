import '../css/Character.css'
function Character(member) {
  member = member.member;
  var deadCheck = false;
  const memberClass = '../../sonder-hc/'+member.character.class+'.webp'
  const memberRace = '../../sonder-hc/'+member.character.race+'-'+member.character.gender+'.webp'
  if (member.character.is_ghost) {
    var date = new Date(member.character.ghosted_at);
    var dateString = date.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });
  }
  if (member.character.is_ghost){
    deadCheck=true;
    deadCheck=deadCheck.toString();
  }

  if (member.rank ==2 || member.rank == 0) {
    return(       
    <div className={`character-card col-sm-4 ${member.character.class}`}>
        <div className="character-details">
          <h3>
            <a href={`${member.character.profile_url}`} target="_blank">
              {member.character.name}
            </a>
            <img src={memberRace}/>
            <img src={memberClass}/>
          </h3>
          <p className="description">
            {" "}
            Level {member.character.level} {member.character.race}{" "}
            {member.character.class} <br/>
          </p>

          {member.character.is_ghost ? (
            <p className="is-dead">Died on: {dateString}<i className="fa fa-tombstone"></i></p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return ""

  }
}
export default Character;
