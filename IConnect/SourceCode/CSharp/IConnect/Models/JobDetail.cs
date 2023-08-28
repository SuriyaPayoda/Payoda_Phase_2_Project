using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace IConnect_Version07.Models;

public partial class JobDetail
{
    public int JId { get; set; }

    public int? CId { get; set; }

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

    public int? TId { get; set; }

    public int JIsactive { get; set; }
    [JsonIgnore]
    public virtual CompanyRegistration? CIdNavigation { get; set; }
    [JsonIgnore]
    public virtual ICollection<JobApply> JobApplies { get; set; } = new List<JobApply>();
    [JsonIgnore]
    public virtual JobType? TIdNavigation { get; set; }
}
