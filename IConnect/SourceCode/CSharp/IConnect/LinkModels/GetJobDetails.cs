namespace IConnect_Version07.LinkModels
{
    public class GetJobDetails
    {
        public int JId { get; set; }

        public int CId { get; set; }

        public string JRole { get; set; } = null!;

        public string JSkill { get; set; } = null!;

        public int JMinexperience { get; set; }

        public int JMaxexperience { get; set; }

        public int JVacancy { get; set; }

        public int JSalary { get; set; }

        public string JHighlight { get; set; } = null!;

        public string JContact { get; set; } = null!;

        public DateTime? JTimeline { get; set; }

        public DateTime JUpdatedon { get; set; }

        public string JLocation { get; set; } = null!;

        public int Isactive { get; set; }
        public string TName { get; set; }
    }
}
