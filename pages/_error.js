function Error({ statusCode }) {
    return (
      <p className="text-center mt-24 text-5xl font-bold">
        {statusCode
          ? `An error ${statusCode} occurred on server...🪛`
          : 'An error occurred on client'}
      </p>
    )
  }
   
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
   
  export default Error