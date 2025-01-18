import React from 'react'
import banner from '../assets/banner.jpg'
import bannerMobile from '../assets/banner-mobile.jpg'
import { useSelector } from 'react-redux'
import { valideURLConvert } from '../utils/valideURLConvert'
import { Link, useNavigate } from 'react-router-dom'
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'
import { MdPayment, MdLocationOn, MdPeople } from 'react-icons/md';
import { RiCustomerService2Fill } from "react-icons/ri";

const Home = () => {
  const loadingCategory = useSelector(state => state.product.loadingCategory)
  const categoryData = useSelector(state => state.product.allCategory)
  const subCategoryData = useSelector(state => state.product.allSubCategory)
  const navigate = useNavigate()

  const handleRedirectProductListpage = (id, cat) => {
    console.log(id, cat)
    const subcategory = subCategoryData.find(sub => {
      const filterData = sub.category.some(c => {
        return c._id == id
      })

      return filterData ? true : null
    })
    const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(subcategory.name)}-${subcategory._id}`

    navigate(url)
    console.log(url)
  }

  const services = [
    {
      icon: <RiCustomerService2Fill className="text-3xl text-green-600" />,
      heading: 'Argent Service 24*7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: <Link to="/get-help" className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600">Get-Help</Link>,
    },
    {
      icon: <MdLocationOn className="text-3xl text-red-500" />,
      heading: 'Location Shop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: <Link to="/location" className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600">View Locations</Link>,
    },
    {
      icon: <MdPeople className="text-3xl text-blue-600" />,
      heading: 'Trusted Users 1000+',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: <Link to="/aboutShop" className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600">aboutShop</Link>,
    },
  ];


  return (
    <section className='bg-white'>
    <div className='container mx-auto'>
        <div className={`w-full h-full min-h-48 bg-blue-100 rounded ${!banner && "animate-pulse my-2" } `}>
            <img
              src={banner}
              className='w-full h-full hidden lg:block'
              alt='banner' 
            />
            <img
              src={bannerMobile}
              className='w-full h-full lg:hidden'
              alt='banner' 
            />
        </div>
    </div>
    

    <section className="py-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Shop & Top Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 shadow-md mr-3">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-800">{service.heading}</h2>
              </div>
              <p className="text-gray-600 font-medium mb-4">{service.description}</p>
              {service.link && (
                <div className="mt-2">
                  {service.link}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    <div className='container mx-auto px-4 my-2 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10  gap-2'>
        {
          loadingCategory ? (
            new Array(12).fill(null).map((c,index)=>{
              return(
                <div key={index+"loadingcategory"} className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse'>
                  <div className='bg-blue-100 min-h-24 rounded'></div>
                  <div className='bg-blue-100 h-8 rounded'></div>
                </div>
              )
            })
          ) : (
            categoryData.map((cat,index)=>{
              return(
                <div key={cat._id+"displayCategory"} className='w-full h-full' onClick={()=>handleRedirectProductListpage(cat._id,cat.name)}>
                  <div>
                      <img 
                        src={cat.image}
                        className='w-full h-full object-scale-down'
                      />
                  </div>
                </div>
              )
            })
            
          )
        }
    </div>

    {/***display category product */}
    {
      categoryData?.map((c,index)=>{
        return(
          <CategoryWiseProductDisplay 
            key={c?._id+"CategorywiseProduct"} 
            id={c?._id} 
            name={c?.name}
          />
        )
      })
    }



 </section>
  )
}

export default Home
