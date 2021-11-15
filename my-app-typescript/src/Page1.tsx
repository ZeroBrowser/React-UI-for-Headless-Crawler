import React, { useState, useCallback, useEffect } from 'react'
//import { Slider, Button } from '@material-ui/core'
import { Button, TextField, Box, BoxProps } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeItem, TreeView } from '@mui/lab';

interface RenderTreeValue {
  url: string;
  total: number;
}

interface RenderTree {
  value: RenderTreeValue;
  children?: readonly RenderTree[];
}


function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

const Page1 = () => {
  const initialRenderTree: RenderTree = { value: { url: "", total: 0 } };
  const [data, setData] = useState(initialRenderTree);
  const [url, setUrl] = useState("https://www.0browser.com");
  const [expanded, setExpanded] = useState([""]);

  const renderTree = function (nodes: RenderTree) {

    if (nodes == null || nodes.value == null || nodes.value.url == null) {
      return;
    }

    return (
      <TreeItem key={nodes.value.url} nodeId={nodes.value.url} label={nodes.value.url}>
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  };


  const handleToggle = (event: any, nodeIds: Array<string>) => {
    setExpanded(nodeIds);
  };

  const crawlSite = (typedUrl: any) => {

    var postBody = {
      "seedUrls": [typedUrl],
      "headlessBrowserUrl": "wss://proxy.0browser.com?token=e281e816-82ee-4c6e-ba1c-8f7ec448ab72"
    }

    const requestMetadata = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postBody)
    };

    var url = "https://localhost:44326/api/Crawler";

    fetch(url, requestMetadata)
      .then(response => response.json())
      .then((data: RenderTree) => {
      });
  };

  const getCrawledData = () => {

    const requestMetadata = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    var url = "https://localhost:44326/api/Crawler/getstructureddata";

    fetch(url, requestMetadata)
      .then(response => response.json())
      .then((renderTree: RenderTree) => {
        if (renderTree != null) {
          setData(renderTree);

          fetch("https://localhost:44326/api/Crawler", requestMetadata)
            .then(response => response.json())
            .then((listOfUrls: Array<string>) => {
              if (listOfUrls != null) {
                setExpanded(listOfUrls);
              }
            });


        }
      });


  };

  useEffect(() => {
    let interval = setInterval(() => getCrawledData(), (1000 * 5));

    //destroy interval on unmount
    return () => clearInterval(interval);
  })

  return (
    <div style={{ width: '100%' }}>
      <h3>CrawlMySite.com</h3>

      <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper' }}>
        <TextField sx={{ flexGrow: 1, m: 2 }} id="outlined-basic" label="Outlined" variant="outlined" value={url} onChange={e => setUrl(e.target.value)} />

        <Button sx={{ m: 2 }} variant="contained" onClick={() => crawlSite(url)}>Crawl</Button>
      </Box>


      <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper' }}>
        <TreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ flexGrow: 1 }}
          expanded={expanded}
          onNodeToggle={handleToggle}
        >
          {renderTree(data)}
        </TreeView>
      </Box>


    </div>
  );
}

export default Page1;
