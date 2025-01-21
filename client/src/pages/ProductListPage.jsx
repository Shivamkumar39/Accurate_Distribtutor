import React, { useEffect, useState } from 'react'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { Link, useParams } from 'react-router-dom'
import AxiosToastError from '../utils/AxiosToastError'
import Loading from '../components/Loading'
import CardProduct from '../components/CardProduct'
import { useSelector } from 'react-redux'
import { valideURLConvert } from '../utils/valideURLConvert'

const ProductListPage = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [totalPage, setTotalPage] = useState(1)
  const params = useParams()
  const AllSubCategory = useSelector(state => state.product.allSubCategory)
  const [DisplaySubCatory, setDisplaySubCategory] = useState([])

  console.log(AllSubCategory)

  const subCategory = params?.subCategory?.split("-")
  const subCategoryName = subCategory?.slice(0, subCategory?.length - 1)?.join(" ")

  const categoryId = params.category.split("-").slice(-1)[0]
  const subCategoryId = params.subCategory.split("-").slice(-1)[0]

  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(true);

  const toggleSubCategory = () => {
    setIsSubCategoryOpen((prev) => !prev);
  };
  const fetchProductdata = async () => {
    try {
      setLoading(true)
      const response = await Axios({
        ...SummaryApi.getProductByCategoryAndSubCategory,
        data: {
          categoryId: categoryId,
          subCategoryId: subCategoryId,
          page: page,
          limit: 8,
        }
      })

      const { data: responseData } = response

      if (responseData.success) {
        if (responseData.page == 1) {
          setData(responseData.data)
        } else {
          setData([...data, ...responseData.data])
        }
        setTotalPage(responseData.totalCount)
      }
    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProductdata()
  }, [params])


  useEffect(() => {
    const sub = AllSubCategory.filter(s => {
      const filterData = s.category.some(el => {
        return el._id == categoryId
      })

      return filterData ? filterData : null
    })
    setDisplaySubCategory(sub)
  }, [params, AllSubCategory])

  return (
    <section className="sticky top-24 lg:top-20 bg-gray-50">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[200px,1fr] lg:grid-cols-[280px,1fr] gap-4">
      {/* Subcategory Section */}
      <div className={`transition-all duration-300 ${isSubCategoryOpen ? "min-h-[88vh] max-h-[88vh] overflow-y-scroll bg-white shadow-md rounded-lg" : "h-auto"}`}>
        {/* Header with Toggle Button */}
        <div className="flex items-center justify-between bg-gray-100 p-4 shadow-sm">
          <p className="font-semibold text-gray-700">Categories</p>
          <button
            className="text-gray-600 hover:text-gray-900 transition"
            onClick={toggleSubCategory}
          >
            {isSubCategoryOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>

        {/* Subcategory List */}
        {isSubCategoryOpen && (
          <div className="grid gap-3 py-4 px-2">
            {DisplaySubCatory.map((s, index) => {
              const link = `/${valideURLConvert(s?.category[0]?.name)}-${s?.category[0]?._id}/${valideURLConvert(s.name)}-${s._id}`;
              return (
                <Link
                  to={link}
                  key={s._id}
                  className={`flex items-center gap-4 p-3 rounded-md border-b border-gray-200 transition-transform duration-300 hover:bg-green-100 hover:scale-105 ${
                    subCategoryId === s._id ? "bg-green-100" : "bg-white"
                  }`}
                >
                  <div className="w-fit mx-auto lg:mx-0 bg-white border-2 border-blue-400 rounded p-2">
                    <img
                      src={s.image}
                      alt="subCategory"
                      className="w-14 h-14 lg:h-14 lg:w-12 object-scale-down transition-transform duration-300 hover:scale-110"
                    />
                    <p className="mt-2 lg:mt-0 text-xs text-center lg:text-left lg:text-base break-words">
                      {s.name}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Section */}
      <div className="sticky top-20">
        <div className="bg-white shadow-md p-4 rounded-t-lg">
          <h3 className="font-semibold text-lg text-gray-700">{subCategoryName}</h3>
        </div>
        <div className="bg-gray-50 rounded-b-lg">
          <div className="min-h-[80vh] max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 lg:p-6 ">
              {data.map((p, index) => (
                <div
                  key={p._id + "productSubCategory" + index}
                  className="bg-white shadow-md rounded-lg hover:shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <CardProduct data={p} />
                </div>
              ))}
            </div>
          </div>
          {loading && <Loading />}
        </div>
      </div>
    </div>
  </section>

  )
}

export default ProductListPage
