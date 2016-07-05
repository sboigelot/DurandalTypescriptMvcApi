using System;

namespace DurandalTodoListCrud.Models
{
    public class TodoModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int Priority { get; set; }
        public DateTime DueDate { get; set; }
    }
}