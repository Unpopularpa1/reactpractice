import React from 'react';
import { Link } from 'react-router-dom'; 
import Card from './Card';

const HomeCards = () => {
  return (
   <>
     <section className='py-4'>

        <div className='container-xl lg:container m-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2
                 gap-4 p-4 rounded-lg'> 

                 <Card bg='bg-indigo-100'>
                    <h2 
                       className='text-2xl font-bold'>For Developers                        
                    </h2>
                    <p
                     className='mt-2 mb-4'>Browse our React   jobs and start your career in React development today!
                    </p>
                    <Link 
                       to="/jobs"
                       className='inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-indigo-500'>
                       Browse Jobs
                    </Link>                  
                 </Card>                
                    
                                                 
                 <Card bg='bg-indigo-200'> 
                     <h2 
                       className='text-2xl font-bold'>For Employeers                        
                    </h2>
                    <p
                     className='mt-2 mb-4'>Add your React job listings and connect with talented developers looking for opportunities.
                    </p> 
                    <Link
                       to="/add-jobs"
                       className='inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-indigo-600'>
                      Add Jobs
                    </Link>          
                 </Card> 
                           
                                
                </div>
            </div>      
        
     </section>
   
   </>
  )
}

export default HomeCards
