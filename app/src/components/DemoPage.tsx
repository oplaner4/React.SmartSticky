import React, { useEffect, useRef, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { StickyAboveOrigPosition } from "./lib/StickyAboveOrigPosition";
import { StickyCustomBgAndPos } from "./lib/StickyCustomBgAndPos";

import { StickyDefault } from "./lib/StickyDefault";
import { StickyDelayed } from "./lib/StickyDelayed";
import { StickyEnableOnBtnClick } from "./lib/StickyEnableOnBtnClick";
import { StickyFixedBottom } from "./lib/StickyFixedBottom";
import { StickyFixedToggle } from "./lib/StickyFixedToggle";
import { StickyImmediately } from "./lib/StickyImmediately";
import { StickyImmediatelyAbove } from "./lib/StickyImmediatelyAbove";
import { StickyOnMobilePhones } from "./lib/StickyOnMobilePhones";
import { StickyRecognizingScrollDirection } from "./lib/StickyRecognizingScrollDirection";
import { StickyRowAsContainer } from "./lib/StickyRowAsContainer";

export const DemoPage = () => {
  const rowContainerRef = useRef<HTMLDivElement>(null);
  const [rowContainer, setRowContainer] = useState<HTMLDivElement | null>(null);
  const globallyEnabled = true;

  useEffect(() => {
    if (rowContainerRef !== null && rowContainerRef.current !== null) {
      setRowContainer(rowContainerRef.current);
    }
  }, []);

  return (
    <Container className="p-4">
      <h2 className="mb-3">React.SmartSticky examples</h2>
      <Row className="mb-2">
        <Col md={6} lg={4}>
            <StickyDefault enabled={globallyEnabled} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
        <Col md={6} lg={4}>
            <StickyFixedBottom enabled={globallyEnabled} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
        <Col md={6} lg={4}>
            <StickyFixedToggle enabled={globallyEnabled} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
      </Row>
      <Row ref={rowContainerRef} className="mb-2 bg-light">
        <Col md={6} lg={4}>
            {rowContainer === null ? null :
              <StickyRowAsContainer rowContainer={rowContainer} enabled={globallyEnabled} />
            }
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
        <Col md={6} lg={4}>
            <StickyDelayed enabled={globallyEnabled} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
        <Col md={6} lg={4}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <StickyAboveOrigPosition enabled={globallyEnabled} />
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={6} lg={4}>
          <table className="table table-dark table-hover">
            <thead className="sticky-smart-7 bg-dark p-0">
              <tr>
                <th scope="col">fixed</th>
                <th scope="col">table</th>
                <th scope="col">header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a</td>
                <td>b</td>
                <td>c</td>
              </tr>
              <tr>
                <td>d</td>
                <td>e</td>
                <td>f</td>
              </tr>
              <tr>
                <td>g</td>
                <td>h</td>
                <td>i</td>
              </tr>
              <tr>
                <td>j</td>
                <td>k</td>
                <td>l</td>
              </tr>
              <tr>
                <td>m</td>
                <td>n</td>
                <td>o</td>
              </tr>
              <tr>
                <td>p</td>
                <td>q</td>
                <td>r</td>
              </tr>
              <tr>
                <td>s</td>
                <td>t</td>
                <td>u</td>
              </tr>
              <tr>
                <td>v</td>
                <td>w</td>
                <td>x</td>
              </tr>
              <tr>
                <td>y</td>
                <td>z</td>
                <td>*</td>
              </tr>
            </tbody>
          </table>
        </Col>

        <Col md={6} lg={4}>
            <StickyCustomBgAndPos enabled={globallyEnabled} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
        <Col md={6} lg={4}>
            <StickyRecognizingScrollDirection enabled={globallyEnabled} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
      </Row>
      <Row className="bg-light mb-2">
        <Col md={6} lg={4}>
            <StickyOnMobilePhones enabled={globallyEnabled} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
        <Col md={6} lg={4}>
            <StickyEnableOnBtnClick />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={6} lg={4}>
            <StickyImmediately enabled={globallyEnabled} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
        </Col>
        <Col md={6} lg={4}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis condimentum augue id
              magna semper rutrum. Nullam sit amet magna in magna gravida vehicula. Etiam bibendum elit eget erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec quis nibh at
              felis congue commodo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer rutrum, orci vestibulum ullamcorper
              ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Vestibulum fermentum tortor
              id mi. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque,
              velit turpis volutpat ante, in pharetra metus odio a lectus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. In rutrum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci,
              molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in neque elementum ultrices.
            </p>
            <p>
              Praesent in mauris eu tortor porttitor accumsan. Vivamus luctus egestas leo. In laoreet, magna id viverra
              tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer lacinia. Etiam posuere
              lacus quis dolor. Etiam neque. Duis viverra diam non justo. Maecenas ipsum velit, consectetuer eu lobortis
              ut, dictum at dui. Nullam at arcu a est sollicitudin euismod. Mauris elementum mauris vitae tortor. Nulla
              non lectus sed nisl molestie malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nullam justo enim, consectetuer nec, ullamcorper ac,
              vestibulum in, elit. Cras elementum.
            </p>
            <p>
              In rutrum. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Donec vitae arcu. Curabitur vitae
              diam non enim vestibulum interdum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              Aliquam erat volutpat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Ut
              tempus purus at lorem. Maecenas libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In enim a arcu imperdiet
              malesuada. Pellentesque pretium lectus id turpis.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam id
              dolor. Etiam dictum tincidunt diam. Maecenas sollicitudin. Pellentesque pretium lectus id turpis. Aliquam
              id dolor. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
              libero, eget facilisis enim ipsum id lacus. Proin in tellus sit amet nibh dignissim sagittis. Sed elit
              dui, pellentesque a, faucibus vel, interdum nec, diam. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla est.
            </p>
            <p>
              Nullam sit amet magna in magna gravida vehicula. Etiam posuere lacus quis dolor. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Integer malesuada. Nunc
              dapibus tortor vel mi dapibus sollicitudin. Quisque tincidunt scelerisque libero. Vivamus ac leo pretium
              faucibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Aliquam ante.
            </p>
            <StickyImmediatelyAbove enabled={globallyEnabled} />
        </Col>
      </Row>
    </Container>
  );
};
