"use client";

import React from "react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { postBBS } from "@/app/actions/postBBSAction";

export const formSchema = z.object({
    username: z.string().min(2, {
        message: "ユーザー名は2文字以上で入力してください",
    }),
    title: z.string().min(2, {
        message: "タイトルは2文字以上で入力してください",
    }),
    content: z
        .string()
        .min(2, {
            message: "本文は10文字以上で入力してください",
        })
        .max(140, {
            message: "本文は140文字以内で入力してください",
        }),
});

const CreateBBSpage = () => {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            title: "",
            content: "",
        },
    });

    const onSubmit = async (value: z.infer<typeof formSchema>) => {
        const { username, title, content } = value;
        postBBS({ username, title, content });
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 w-1/2 px-7"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ユーザー名</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="ユーザー名を入力してください"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>タイトル</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="タイトルを入力してください"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>投稿内容</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="投稿内容を入力してください"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default CreateBBSpage;
