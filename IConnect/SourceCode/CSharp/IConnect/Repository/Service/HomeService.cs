using IConnect_Version07.DBContext;
using IConnect_Version07.GlobalExceptions;
using IConnect_Version07.LinkModels;
using IConnect_Version07.Models;
using IConnect_Version07.Repository.IService;
using Microsoft.EntityFrameworkCore;

namespace IConnect_Version07.Repository.Service
{
    public class HomeService:IHomeService
    {
        public IconnectContext _iconnectContext;

        public HomeService(IconnectContext iconnectContext)
        {
            _iconnectContext = iconnectContext;
        }

        public async Task<List<UserRegistration>> UserRegister(UserRegistration user)
        {
            if (user != null)
            {
                
                _iconnectContext.UserRegistrations.Add(user);
                await _iconnectContext.SaveChangesAsync();
                var users = await _iconnectContext.UserRegistrations.ToListAsync();
                return users;
            }
            else
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }
        }
        public async Task<GetRole> SeekerLogin(Login user)
        {
           
            var l_user = await _iconnectContext.UserRegistrations.FirstOrDefaultAsync(u => u.UEmail == user.username && u.UPassword == user.password);
            if (l_user == null)
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }
            else
            {
                var get = new GetRole();
                get.UserId = l_user.UId;
                get.RoleId = 2;
                return get;
            }
        }
        public async Task<List<CompanyRegistration>> CompanyRegister(CompanyRegistration user)
        {
            if (user != null)
            {
                _iconnectContext.CompanyRegistrations.Add(user);
                await _iconnectContext.SaveChangesAsync();
                return await _iconnectContext.CompanyRegistrations.ToListAsync();
            }
            else
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }
        }
        public async Task<GetRole> CompanyLogin(Login user)
        {
            var l_user = await _iconnectContext.CompanyRegistrations.FirstOrDefaultAsync(u => u.CEmail == user.username && u.CPassword == user.password);
            if (l_user == null)
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }
            else
            {
                var get = new GetRole();
                get.UserId = l_user.CId;
                get.RoleId = 1;
                return get;
            }
        }
    }
}
