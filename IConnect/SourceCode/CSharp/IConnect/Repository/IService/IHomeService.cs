using IConnect_Version07.LinkModels;
using IConnect_Version07.Models;

namespace IConnect_Version07.Repository.IService
{
    public interface IHomeService
    {
        public Task<List<UserRegistration>> UserRegister(UserRegistration user);
        public Task<GetRole> SeekerLogin(Login user);
        public Task<List<CompanyRegistration>> CompanyRegister(CompanyRegistration user);
        public Task<GetRole> CompanyLogin(Login user);
    }
}
