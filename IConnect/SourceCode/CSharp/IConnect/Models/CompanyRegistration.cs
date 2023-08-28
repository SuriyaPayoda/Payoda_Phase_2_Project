using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace IConnect_Version07.Models;

public partial class CompanyRegistration
{
    public int CId { get; set; }

    public string CName { get; set; } = null!;

    public string CEmail { get; set; } = null!;

    public string CPassword { get; set; } = null!;

    public long CPhno { get; set; }

    public string? CImage { get; set; }

    public int CIsactive { get; set; }

    public int CIspermit { get; set; }
    [JsonIgnore]
    public virtual ICollection<JobDetail> JobDetails { get; set; } = new List<JobDetail>();
}
