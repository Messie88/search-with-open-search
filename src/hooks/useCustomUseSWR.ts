import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useCustomFetcher =(url: string) => {
    const { data, error, isLoading } = useSWR(url, fetcher)

    return {
        data,
        isLoading,
        error
      }
}

export default useCustomFetcher