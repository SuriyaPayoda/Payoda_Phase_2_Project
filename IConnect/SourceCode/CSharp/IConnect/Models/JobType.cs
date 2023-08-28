using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace IConnect_Version07.Models;

public partial class JobType
{
    public int TId { get; set; }

    public string TName { get; set; } = null!;
    [JsonIgnore]
    public virtual ICollection<JobApply> JobApplies { get; set; } = new List<JobApply>();
    [JsonIgnore]
    public virtual ICollection<JobDetail> JobDetails { get; set; } = new List<JobDetail>();
}
