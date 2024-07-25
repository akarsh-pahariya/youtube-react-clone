import Button from "./Button";

const ButtonList = () => {
    const list = [
        "All",
        "New",
        "Gaming",
        "Music",
        "JavaScript",
        "Test Drives",
        "Display Devices",
        "Mobile Phones",
        "SUVs",
        "Sketch Comedy",
    ];

    return (
        <div className="mx-1">
            {list.map((item) => (
                <Button key={item} text={item} />
            ))}
        </div>
    );
};

export default ButtonList;
