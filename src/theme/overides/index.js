import Button from "./Button";
import Card from "./Card";

export default function ComponentsOveride(theme) {
    return Object.assign(
        Card(theme),
        Button(theme),
    )
}