<?php

header("Access-Control-Allow-Origin: *");

$action = filter_input(INPUT_GET, "action");

function contains($a, $value) {
    return strpos($a, $value) !== false;
}

$context = stream_context_create(array(
    "http" => array(
        "header" => "Authorization: Basic " . base64_encode("lgk:lgk")
    )
));

if ($action == "packages") {
    $packages = [
        [
            "name" => "blue-react"
        ],
        [
            "name" => "react-blue-app"
        ],
        [
            "name" => "blueicon"
        ],
        [
            "name" => "blueicon-colored"
        ],
        [
            "name" => "create-blue-app"
        ]
    ];

    $path = "C:\\_VS.NET\\Web\\Blue\\";

    foreach ($packages as $key => $p) {
        $url = "http://pbgsvn1/svn/bsw/trunk/Web/Blue/" . $p["name"];

        $content = file_get_contents($url, false, $context);

        $dom = new DOMDocument();
        $dom->loadHTML($content);

        $listItems = $dom->getElementsByTagName("li");

        foreach ($listItems as $li) {

            $innerHTML = $li->getElementsByTagName("a")[0]->nodeValue;
            
            if (contains($innerHTML, $p["name"]) && contains($innerHTML, ".tgz")) {
                $packages[$key]["fileUrl"] = $url . "/" . $innerHTML;
                $packages[$key]["filePath"] = $path . $p["name"] . "\\" . $innerHTML;
                $packages[$key]["fileName"] = $innerHTML;
            }
        }
    }

    header("Content-Type: application/json");
    echo json_encode($packages);
    exit;
}

if ($action == "icon") {
    $icon = filter_input(INPUT_GET, "icon");
    $style = filter_input(INPUT_GET, "style");
    $extension = filter_input(INPUT_GET, "extension");
    $size = filter_input(INPUT_GET, "size");
    $mimeType = filter_input(INPUT_GET, "mimeType");

    if (!$icon) $icon = "3d_glasses";
    if (!$style) $style = "office";
    if (!$extension) $extension = "xaml";
    if (!$size) $size = "128";

    if (!$mimeType) {
        if ($extension == "xaml") {
            $mimeType = "application/xaml+xml";
        }
        elseif ($extension == "svg") {
            $mimeType = "image/svg+xml";
        }
        elseif ($extension == "png") {
            $mimeType = "image/png";
        }
    }

    $path = "\\\\pbgfs1\\lw_q\\VBRest.NET\\Icons (gekaufte)\\o_collection\\o_collection_$extension\\$style";
    if ($extension == "png") {
        $path .= "\\$size" . "x$size";
    }
    $path .= "\\$icon.$extension";
    
    $file = file_get_contents($path);

    header("Content-Type: $mimeType");
    
    if ($mimeType != "text/plain" && !(strpos($mimeType, "image/") === 0)) {
        header("Content-Disposition: attachment; filename=$icon.$extension");
    }

    echo $file;
    exit;
}

if ($action == "themifyGetLatestVersion") {
    $urlToJson = "http://pbgsvn1.patorg.org/svn/bsw/trunk/Web/Blue/themify/latestVersion.json";
    header("Content-Type: application/json");
    echo file_get_contents($urlToJson, false, $context);
    exit;
}