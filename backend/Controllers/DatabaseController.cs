using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using System.Collections.Generic;

[Route("api/database")]
[ApiController]
public class DatabaseController : ControllerBase
{
    private readonly string _connectionString = "Data Source=restaurant.db";

    [HttpGet("tables")]
    public ActionResult<IEnumerable<string>> GetTables()
    {
        var tables = new List<string>();
        using (var connection = new SqliteConnection(_connectionString))
        {
            connection.Open();
            var command = connection.CreateCommand();
            command.CommandText = "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';";

            using (var reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    tables.Add(reader.GetString(0));
                }
            }
        }
        return Ok(tables);
    }

    [HttpGet("table/{tableName}")]
    public ActionResult<IEnumerable<Dictionary<string, object>>> GetTableData(string tableName)
    {
        var data = new List<Dictionary<string, object>>();
        using (var connection = new SqliteConnection(_connectionString))
        {
            connection.Open();
            var command = connection.CreateCommand();
            command.CommandText = $"SELECT * FROM {tableName};";

            using (var reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    var row = new Dictionary<string, object>();
                    for (int i = 0; i < reader.FieldCount; i++)
                    {
                        row[reader.GetName(i)] = reader[i];
                    }
                    data.Add(row);
                }
            }
        }
        return Ok(data);
    }
}
