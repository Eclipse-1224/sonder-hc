const BASE_URL ="https://era.raider.io"
const GUILD_NAME = "sonder"
const REGION = "us"
const REALM = "doomhowl"

export const getSonderMembers = async()  => {
    const response= await fetch(`${BASE_URL}/api/v1/guilds/profile?region=${REGION}&realm=${REALM}&name=${GUILD_NAME}&fields=members`);
    //const response= await fetch(`https://era.raider.io/api/v1/guilds/profile?region=us&realm=skull-rock&name=sonder&fields=members`);
    const data = await response.json()
    return data.members
};