using System;
using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Web;
using System.Web.Http;
using DurandalTodoListCrud.Models;
using Newtonsoft.Json;

namespace DurandalTodoListCrud.Controllers
{
    public class TodoController : ApiController
    {
        // GET api/<controller>
        public string Get()
        {
            Thread.Sleep(TimeSpan.FromSeconds(1.5));
            if (File.Exists("todo.json"))
            {
                var value = File.ReadAllText("todo.json");
                return value;
            }
            return "[]";
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
            var reader = new JsonTextReader(new StringReader(value));
            var todos = new JsonSerializer().Deserialize<TodoModel[]>(reader);
            File.WriteAllText("todo.json", value);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}