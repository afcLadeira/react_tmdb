

export const axiosFetch = async (url , axiosPrivate) => {
  
    const { data } = await axiosPrivate.get(url);
    return data;
  };
  