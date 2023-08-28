using System;
using System.Collections.Generic;
using IConnect_Version07.Models;
using Microsoft.EntityFrameworkCore;

namespace IConnect_Version07.DBContext;

public partial class IconnectContext : DbContext
{
    public IconnectContext()
    {
    }

    public IconnectContext(DbContextOptions<IconnectContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CompanyRegistration> CompanyRegistrations { get; set; }

    public virtual DbSet<JobApply> JobApplies { get; set; }

    public virtual DbSet<JobDetail> JobDetails { get; set; }

    public virtual DbSet<JobType> JobTypes { get; set; }

    public virtual DbSet<UserRegistration> UserRegistrations { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CompanyRegistration>(entity =>
        {
            entity.HasKey(e => e.CId).HasName("pk_company");

            entity.ToTable("Company_Registration");

            entity.HasIndex(e => e.CEmail, "uk_cemail").IsUnique();

            entity.HasIndex(e => e.CPhno, "uk_cphno").IsUnique();

            entity.Property(e => e.CId).HasColumnName("c_id");
            entity.Property(e => e.CEmail)
                .HasMaxLength(30)
                .HasColumnName("c_email");
            entity.Property(e => e.CImage)
                .HasMaxLength(30)
                .HasColumnName("c_image");
            entity.Property(e => e.CIsactive).HasColumnName("c_isactive");
            entity.Property(e => e.CIspermit).HasColumnName("c_ispermit");
            entity.Property(e => e.CName)
                .HasMaxLength(25)
                .HasColumnName("c_name");
            entity.Property(e => e.CPassword)
                .HasMaxLength(25)
                .HasColumnName("c_password");
            entity.Property(e => e.CPhno).HasColumnName("c_phno");
        });

        modelBuilder.Entity<JobApply>(entity =>
        {
            entity.HasKey(e => e.AId).HasName("pk_apply");

            entity.ToTable("Job_Apply");

            entity.Property(e => e.AId).HasColumnName("a_id");
            entity.Property(e => e.JId).HasColumnName("j_id");
            entity.Property(e => e.JStatus)
                .HasMaxLength(20)
                .HasColumnName("j_status");
            entity.Property(e => e.TId).HasColumnName("t_id");
            entity.Property(e => e.UAppliedon)
                .HasColumnType("date")
                .HasColumnName("u_appliedon");
            entity.Property(e => e.UExperience).HasColumnName("u_experience");
            entity.Property(e => e.UId).HasColumnName("u_id");
            entity.Property(e => e.USkill)
                .HasColumnType("text")
                .HasColumnName("u_skill");

            entity.HasOne(d => d.JIdNavigation).WithMany(p => p.JobApplies)
                .HasForeignKey(d => d.JId)
                .HasConstraintName("fk_ajob");

            entity.HasOne(d => d.TIdNavigation).WithMany(p => p.JobApplies)
                .HasForeignKey(d => d.TId)
                .HasConstraintName("fk_acompany");

            entity.HasOne(d => d.UIdNavigation).WithMany(p => p.JobApplies)
                .HasForeignKey(d => d.UId)
                .HasConstraintName("fk_auser");
        });

        modelBuilder.Entity<JobDetail>(entity =>
        {
            entity.HasKey(e => e.JId).HasName("pk_job");

            entity.ToTable("Job_Details");

            entity.HasIndex(e => new { e.JId, e.CId }, "uk_job").IsUnique();

            entity.Property(e => e.JId).HasColumnName("j_id");
            entity.Property(e => e.CId).HasColumnName("c_id");
            entity.Property(e => e.JContact)
                .HasMaxLength(30)
                .HasColumnName("j_contact");
            entity.Property(e => e.JHighlight)
                .HasColumnType("text")
                .HasColumnName("j_highlight");
            entity.Property(e => e.JIsactive).HasColumnName("j_isactive");
            entity.Property(e => e.JLocation)
                .HasMaxLength(30)
                .HasColumnName("j_location");
            entity.Property(e => e.JMaxexperience).HasColumnName("j_maxexperience");
            entity.Property(e => e.JMinexperience).HasColumnName("j_minexperience");
            entity.Property(e => e.JRole)
                .HasMaxLength(25)
                .HasColumnName("j_role");
            entity.Property(e => e.JSalary).HasColumnName("j_salary");
            entity.Property(e => e.JSkill)
                .HasColumnType("text")
                .HasColumnName("j_skill");
            entity.Property(e => e.JTimeline)
                .HasColumnType("date")
                .HasColumnName("j_timeline");
            entity.Property(e => e.JUpdatedon)
                .HasColumnType("datetime")
                .HasColumnName("j_updatedon");
            entity.Property(e => e.JVacancy).HasColumnName("j_vacancy");
            entity.Property(e => e.TId).HasColumnName("t_id");

            entity.HasOne(d => d.CIdNavigation).WithMany(p => p.JobDetails)
                .HasForeignKey(d => d.CId)
                .HasConstraintName("fk_company");

            entity.HasOne(d => d.TIdNavigation).WithMany(p => p.JobDetails)
                .HasForeignKey(d => d.TId)
                .HasConstraintName("fk_type");
        });

        modelBuilder.Entity<JobType>(entity =>
        {
            entity.HasKey(e => e.TId).HasName("pk_type");

            entity.ToTable("Job_Type");

            entity.Property(e => e.TId).HasColumnName("t_id");
            entity.Property(e => e.TName)
                .HasMaxLength(25)
                .HasColumnName("t_name");
        });

        modelBuilder.Entity<UserRegistration>(entity =>
        {
            entity.HasKey(e => e.UId).HasName("pk_user");

            entity.ToTable("User_Registration");

            entity.HasIndex(e => e.UEmail, "uk_email").IsUnique();

            entity.HasIndex(e => e.UPhno, "uk_phno").IsUnique();

            entity.Property(e => e.UId).HasColumnName("u_id");
            entity.Property(e => e.UCollege)
                .HasMaxLength(50)
                .HasColumnName("u_college");
            entity.Property(e => e.UCourse)
                .HasMaxLength(25)
                .HasColumnName("u_course");
            entity.Property(e => e.UCoursetype)
                .HasMaxLength(25)
                .HasColumnName("u_coursetype");
            entity.Property(e => e.UDob)
                .HasColumnType("date")
                .HasColumnName("u_dob");
            entity.Property(e => e.UEmail)
                .HasMaxLength(30)
                .HasColumnName("u_email");
            entity.Property(e => e.UFirstname)
                .HasMaxLength(25)
                .HasColumnName("u_firstname");
            entity.Property(e => e.UGender)
                .HasMaxLength(10)
                .HasColumnName("u_gender");
            entity.Property(e => e.UImage)
                .HasMaxLength(30)
                .HasColumnName("u_image");
            entity.Property(e => e.UIsactive).HasColumnName("u_isactive");
            entity.Property(e => e.ULastname)
                .HasMaxLength(25)
                .HasColumnName("u_lastname");
            entity.Property(e => e.UPassword)
                .HasMaxLength(25)
                .HasColumnName("u_password");
            entity.Property(e => e.UPhno).HasColumnName("u_phno");
            entity.Property(e => e.UResume)
                .HasMaxLength(30)
                .HasColumnName("u_resume");
            entity.Property(e => e.USpecification)
                .HasMaxLength(30)
                .HasColumnName("u_specification");
            entity.Property(e => e.UUpdatedon)
                .HasColumnType("datetime")
                .HasColumnName("u_updatedon");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
