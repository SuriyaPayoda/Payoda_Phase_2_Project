using IConnect_Version07.LinkModels;
using IConnect_Version07.Models;

namespace IConnect_Version07.Repository.IService
{
    public interface ISeekerService
    {
        public Task<UserRegistration> Updateprofile(int Uid, UserRegistration user);
        public Task<UserRegistration> UploadPhoto(IFormFile file, int Uid);
        public Task<UserRegistration> UploadResume(IFormFile file, int Uid);
        public Task<List<JobApply>> JobApply(JobApply job);
        public Task<List<CompanyDisplay>> GetCompanyInfo();
        public Task<List<ViewStatus>> ViewStatus(int uid);
        public Task<UserRegistration> GetSeekerDetails(int uid);
    }
}
