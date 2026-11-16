import fs from 'fs';
const data = "hello";
fs.writeFile("s.txt", data, "utf-8", (err) => {
    if (err) throw err;
    console.log(1);
    fs.readFile("s.txt", "utf-8", (err, rd) => {
        if (err) throw err;
        console.log(rd);
        const appenddata = "\nThis is added";
        fs.appendFile("s.txt", appenddata, "utf-8", (err) => {
            if (err) throw err;
            fs.readFile("s.txt", "utf-8", (err, readAppendData) => {
                if (err) throw err;
                console.log(readAppendData);
                console.log(3);
                fs.rename("s.txt", "new.txt", (err) => {
                    if (err) throw err;
                    // fs.unlink("new.txt", (err) => {
                    //     if (err) throw err;
                    //     console.log("File renamed and deleted");
                    // });
                    console.log("File is renamed.")
                });
            });
        });
    });
});