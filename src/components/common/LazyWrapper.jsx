import React, { Suspense } from 'react'
import Spinner from './Spinner'

function LazyWrapper({ children, spinnerSize = "text-xl"}) {
  return (
    <div>
       <Suspense fallback={<Spinner size = {spinnerSize}/>}>
        {children}
      </Suspense>
    </div>
  )
}

export default LazyWrapper
