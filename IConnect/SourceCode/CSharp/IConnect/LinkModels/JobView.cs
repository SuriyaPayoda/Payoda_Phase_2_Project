namespace IConnect_Version07.LinkModels
{
    public class JobView
    {
        public int JId { get; set; }
        public int CId { get; set; }
        public string JRole { get; set; }
        public string JSkill { get; set; }
        public int JMinexperience { get; set; }
        public int JMaxexperience { get; set; }
        public int JVacancy { get; set; }
        public int JSalary { get; set; }
        public string JHighlight { get; set; }
        public string JContact { get; set; }
        public DateTime? JTimeline { get; set; }
        public DateTime JUpdatedon { get; set; }
        public string JLocation { get; set; }
        public int Isactive { get; set; }
        public string TName { get; set; }
    }
}
