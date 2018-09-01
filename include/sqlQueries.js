'use strict'

module.exports.getAllRoles = 'SELECT role_name FROM "role"'

module.exports.getAllGroups = 'SELECT group_name FROM "group"'

module.exports.getAllRolesFromGroups =
  `SELECT R.role_name FROM "role" R
  INNER JOIN role_group RG ON RG.id_role = R.id_role
  GROUP BY R.role_name`

module.exports.getRolesOfGroup =
  `SELECT R.role_name FROM "role" R
  INNER JOIN role_group RG ON RG.id_role = R.id_role
  INNER JOIN "group" G ON G.id_group = RG.id_group
  WHERE LOWER(G.group_name) = LOWER($1)`

module.exports.getAllClans = 'SELECT clan_name FROM "clan"'
module.exports.searchClan = 'SELECT clan_name FROM "clan" WHERE LOWER(clan_name) = LOWER($1)'

module.exports.addHomework =
  `INSERT INTO homework (group_name, date, course, content, author_discord_id)
  VALUES ($1, $2, $3, $4, $5)`

module.exports.getHomework =
  `SELECT * FROM homework
  WHERE LOWER(group_name) = LOWER($1) AND date > current_date
  ORDER BY date`