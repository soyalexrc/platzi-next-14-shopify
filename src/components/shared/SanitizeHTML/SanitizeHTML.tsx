import {createElement, HTMLAttributes} from "react";
import sanitize from "sanitize-html";

type Props = {
    children: string;
    tag: string;
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({children, tag, ... rest}: Props) => {
    const sanitizedHTML = sanitize(children, {
        allowedTags: ['b', 'p', 'i', 'em', 'strong'],
    });

    return createElement(
        tag,
        {...rest},
        sanitizedHTML
    )
}
