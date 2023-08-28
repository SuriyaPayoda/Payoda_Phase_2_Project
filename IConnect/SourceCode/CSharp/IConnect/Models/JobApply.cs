using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace IConnect_Version07.Models;

public partial class JobApply
{
    public int AId { get; set; }

    public int? JId { get; set; }

    public int? UId { get; set; }

    public string USkill { get; set; } = null!;

    public int UExperience { get; set; }

    public DateTime? UAppliedon { get; set; }

    public int? TId { get; set; }

    public string JStatus { get; set; } = null!;
    [JsonIgnore]
    public virtual JobDetail? JIdNavigation { get; set; }
    [JsonIgnore]
    public virtual JobType? TIdNavigation { get; set; }
    [JsonIgnore]
    public virtual UserRegistration? UIdNavigation { get; set; }
}
