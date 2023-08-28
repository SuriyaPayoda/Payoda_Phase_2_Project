using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace IConnect_Version07.Models;

public partial class UserRegistration
{
    public int UId { get; set; }

    public string UFirstname { get; set; } = null!;

    public string? ULastname { get; set; }

    public string UEmail { get; set; } = null!;

    public string UPassword { get; set; } = null!;

    public long UPhno { get; set; }

    public string? UCourse { get; set; }

    public string? USpecification { get; set; }

    public string? UCoursetype { get; set; }

    public string? UCollege { get; set; }

    public string? UGender { get; set; }

    public DateTime? UDob { get; set; }

    public DateTime? UUpdatedon { get; set; }

    public string? UImage { get; set; }

    public string? UResume { get; set; }

    public int UIsactive { get; set; }
    [JsonIgnore]
    public virtual ICollection<JobApply> JobApplies { get; set; } = new List<JobApply>();
}
