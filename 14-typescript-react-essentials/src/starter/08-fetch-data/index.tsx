import { useState } from "react";
import { fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

function Component() {
    const [refreshCount, setRefreshCount] = useState<number>(0);

    const {
        isPending,
        isError,
        error,
        data: tours,
    } = useQuery({
        queryKey: ["tours", refreshCount],
        queryFn: fetchTours,
    });

    if (isPending) return <h2>Loading...</h2>;
    if (isError) return <h2>Error: {error.message}</h2>;
    return (
        <div>
            <h2 className="mb-1">Tours</h2>
            {tours.map((tour) => {
                return (
                    <p className="mb-1" key={tour.id}>
                        {tour.name}
                    </p>
                );
            })}
            <button
                onClick={() => {
                    setRefreshCount((c: number) => c + 1);
                }}
            >
                refresh
            </button>
        </div>
    );
}

export default Component;
