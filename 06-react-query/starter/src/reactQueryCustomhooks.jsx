import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
    const { isLoading, data, error, isError } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const { data } = await customFetch.get("/");

            return data;
        },
    });
    return { isLoading, data, error, isError };
};

export const useCreateTask = () => {
    const queryClient = useQueryClient();
    const { mutate: createTask, isLoading: createTaskLoading } = useMutation({
        mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
            toast.success("success!");
        },
        onError: (error) => {
            toast.error(error.response.data.msg);
        },
    });

    return { createTask, createTaskLoading };
};
export const useEditTask = () => {
    const queryClient = useQueryClient();
    const { mutate: editTask } = useMutation({
        mutationFn: ({ taskId, isDone }) => {
            return customFetch.patch(`/${taskId}`, { isDone: isDone });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
    return { editTask };
};
export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
        mutationFn: (taskId) => {
            return customFetch.delete(`/${taskId}`);
        },
        onSuccess: () => {
            toast.success("delete!");
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });

    return { deleteTask, deleteTaskLoading };
};
