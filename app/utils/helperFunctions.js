export const fetchWithTimeOut = async ({
  url,
  requestOptions,
  timeOut = 5000,
}) => {
  // creating new controller object
  const controller = new AbortController();
  const signal = controller.signal;
  try {
    const id = setTimeout(() => {
      // abort the fetch if it reached the wait time
      controller.abort();
      clearTimeout(id);
    }, timeOut);
    //   making fetch request
    const response = await fetch(url, { ...requestOptions, signal });
    //    return response
    return response;
  } catch (error) {
    console.log("Error occured in the Fetch With TimeOut Function", error);
    throw new Error(error);
  }
};
