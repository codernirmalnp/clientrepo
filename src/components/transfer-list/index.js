import React from "react";
import * as Mui from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Search from "../search";
import { Filter } from "../filter";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
} from "../svg";

function not(a, b) {
  return a
    .filter((value) => b.indexOf(value.id) === -1)
    .map(function (value) {
      return value.id;
    });
}

function notIn(a, b) {
  return a.filter((value) => b.indexOf(value.id) === -1);
}

function filterId(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((element) => b.some((x) => x.id === element));
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

const TransferList = (props) => {
  const { t, i18n } = useTranslation();
  const [left, setLeft] = React.useState([]);
  const [right, setRight] = React.useState([]);
  const [checked, setChecked] = React.useState([]);
  const [searchLeft, setSearchLeft] = React.useState("");
  const [filterLeft, setFilterLeft] = React.useState("");
  const [searchRight, setSearchRight] = React.useState("");
  const [filterRight, setFilterRight] = React.useState("");
  const [typingTimeoutLeft, setTypingTimeoutLeft] = React.useState(0);
  const [typingTimeoutRight, setTypingTimeoutRight] = React.useState(0);
  const leftChecked = intersection(checked, props.left);
  const rightChecked = intersection(checked, props.right);

  React.useEffect(() => {
    setLeft(props.left);
    setSearchLeft("");
    setFilterLeft("");
  }, [props.left]);

  React.useEffect(() => {
    setRight(props.right);
    setSearchRight("");
    setFilterRight("");
  }, [props.right]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(items, checked));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    let leftCheckedObj = props.left.filter(
      (value) => leftChecked.indexOf(value.id) !== -1
    );
    props.callback(
      notIn(props.left, leftChecked),
      props.right.concat(leftCheckedObj)
    );
    setChecked(filterId(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    let rightCheckedObj = props.right.filter(
      (value) => rightChecked.indexOf(value.id) !== -1
    );
    props.callback(
      props.left.concat(rightCheckedObj),
      notIn(props.right, rightChecked)
    );
    setChecked(filterId(checked, rightChecked));
  };

  const elLeft = (items, search, filter) => {
    if (search && filter) {
      setLeft(
        items.filter(
          (element) =>
            (element.name?.[i18n.language]
              .toLowerCase()
              .indexOf(search.toLowerCase()) > -1 ||
              element.uniqueId.indexOf(search) > -1) &&
            element.productCategoryId === filter
        )
      );
    } else if (search) {
      setLeft(
        items.filter(
          (element) =>
            element.name?.[i18n.language]
              .toLowerCase()
              .indexOf(search.toLowerCase()) > -1 ||
            element.uniqueId.indexOf(search) > -1
        )
      );
    } else if (filter) {
      setLeft(items.filter((element) => element.productCategoryId === filter));
    } else {
      setLeft(items);
    }
  };

  const elRight = (items, search, filter) => {
    if (search && filter) {
      setRight(
        items.filter(
          (element) =>
            element.name?.[i18n.language].toLowerCase().indexOf(search) > -1 ||
            element.uniqueId.indexOf(search) > -1 ||
            element.productCategoryId === filter
        )
      );
    } else if (search) {
      setRight(
        items.filter(
          (element) =>
            element.name?.[i18n.language].toLowerCase().indexOf(search) > -1 ||
            element.uniqueId.indexOf(search) > -1
        )
      );
    } else if (filter) {
      setRight(items.filter((element) => element.productCategoryId === filter));
    } else {
      setRight(items);
    }
  };

  const handleSearchLeft = (event) => {
    let val = event.target.value;
    setSearchLeft(event.target.value);
    if (typingTimeoutLeft) {
      clearTimeout(typingTimeoutLeft);
    }
    setTypingTimeoutLeft(
      setTimeout(function () {
        elLeft(props.left, val, filterLeft);
      }, 1000)
    );
  };

  const handleFilterLeft = (event) => {
    let val = event.target.value;
    setFilterLeft(val);
    elLeft(props.left, searchLeft, val);
  };

  const handleSearchRight = (event) => {
    let val = event.target.value;
    setSearchRight(event.target.value);
    if (typingTimeoutRight) {
      clearTimeout(typingTimeoutRight);
    }
    setTypingTimeoutRight(
      setTimeout(function () {
        elRight(props.right, val, filterRight);
      }, 1000)
    );
  };

  const handleFilterRight = (event) => {
    let val = event.target.value;
    setFilterRight(val);
    elRight(props.right, searchRight, val);
  };

  const customList = (items, key) => (
    <Mui.Box
      width="100%"
      className="p-3 border-1 border-color-light-grey border-rad-4"
    >
      <Mui.Grid
        container
        spacing={2}
        alignItems="center"
        className="datatable-filter-bar mb-3"
      >
        <Mui.Grid item xs={12} sm={4}>
          <Mui.Typography component="h6" variant="h6" className="title">
            {props.title}
          </Mui.Typography>
        </Mui.Grid>

        <Mui.Grid item xs={12} sm={4}>
          {props.enableSearch ? (
            <>
              {key === "left" ? (
                <Search value={searchLeft} onSearch={handleSearchLeft} />
              ) : (
                <Search value={searchRight} onSearch={handleSearchRight} />
              )}
            </>
          ) : null}
        </Mui.Grid>

        <Mui.Grid item xs={12} sm={4}>
          {props.enableFilter ? (
            <>
              {key === "left" ? (
                <Filter
                  label=""
                  value={filterLeft}
                  onFilter={handleFilterLeft}
                  options={props.options}
                  displayEmpty={true}
                />
              ) : (
                <Filter
                  label=""
                  value={filterRight}
                  onFilter={handleFilterRight}
                  options={props.options}
                  displayEmpty={true}
                />
              )}
            </>
          ) : null}
        </Mui.Grid>
      </Mui.Grid>

      <Mui.TableContainer style={{ height: 620 }}>
        <Mui.Table stickyHeader className="default-datatable">
          <Mui.TableHead>
            <Mui.TableRow>
              <Mui.TableCell className="pl-0" style={{ minWidth: 80 }}>
                <Mui.Checkbox
                  color="primary"
                  onClick={handleToggleAll(items)}
                  checked={
                    numberOfChecked(items) === items.length &&
                    items.length !== 0
                  }
                  indeterminate={
                    numberOfChecked(items) !== items.length &&
                    numberOfChecked(items) !== 0
                  }
                  disabled={items.length === 0}
                  inputProps={{ "aria-label": "all items selected" }}
                  className="p-0 mr-1"
                />
                {t("COMMON.ID")}
              </Mui.TableCell>
              <Mui.TableCell style={{ minWidth: 200 }}>
                {t("COMMON.FOOD_ITEM")}
              </Mui.TableCell>
              <Mui.TableCell>{t("COMMON.FORM.STATUS")}</Mui.TableCell>
            </Mui.TableRow>
          </Mui.TableHead>

          <Mui.TableBody>
            {items?.map((value, index) => {
              const labelId = `transfer-list-all-item-${value.id}-label`;

              return (
                <Mui.TableRow
                  key={index}
                  onClick={handleToggle(value.id)}
                  className="pointer vertical-align-top"
                >
                  <Mui.TableCell className="pl-0">
                    <Mui.Box
                      component="span"
                      display="flex"
                      alignItems="center"
                    >
                      <Mui.Checkbox
                        color="primary"
                        checked={checked.indexOf(value.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                        className="p-0 mr-1"
                      />
                      {value?.uniqueId || "-"}
                    </Mui.Box>
                  </Mui.TableCell>
                  <Mui.TableCell>
                    {value.name?.[i18n.language] || "-"}
                  </Mui.TableCell>
                  <Mui.TableCell>
                    <span className="status-bg success">
                      {value.statusConfigChoice?.displayName?.[i18n.language] ||
                        "-"}
                    </span>
                  </Mui.TableCell>
                </Mui.TableRow>
              );
            })}
            {items?.length === 0 ? (
              <Mui.TableRow>
                <Mui.TableCell colSpan="3">
                  {t("COMMON.FORM.NO_RECORD_LABEL")}
                </Mui.TableCell>
              </Mui.TableRow>
            ) : null}
          </Mui.TableBody>
        </Mui.Table>
      </Mui.TableContainer>
    </Mui.Box>
  );

  return (
    <Mui.Grid container spacing={2} justify="center">
      <Mui.Grid item xs={12} md={5}>
        {customList(left, "left")}
      </Mui.Grid>
      <Mui.Grid item xs={12} md={2} className="align-self-center">
        <Mui.Box
          display="flex"
          flexDirection={Mui.isWidthDown("sm", props.width) ? "row" : "column"}
          alignItems={Mui.isWidthDown("sm", props.width) ? "center" : "strech"}
          justifyContent="center"
        >
          <Mui.Button
            color="primary"
            size="small"
            disableElevation
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            className="pr-2 m-3"
            classes={{ label: "d-flex justify-content-start" }}
          >
            <span className="mr-1 line-height-null">
              {Mui.isWidthDown("sm", props.width) ? (
                <IconChevronDown />
              ) : (
                <IconChevronRight />
              )}
            </span>
            {t("COMMON.ADD")}
          </Mui.Button>
          <Mui.Button
            color="primary"
            size="small"
            disableElevation
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            className="pr-2 m-3"
            classes={{ label: "d-flex justify-content-start" }}
          >
            <span className="mr-1 line-height-null">
              {Mui.isWidthDown("sm", props.width) ? (
                <IconChevronUp />
              ) : (
                <IconChevronLeft />
              )}
            </span>
            {t("COMMON.REMOVE")}
          </Mui.Button>
        </Mui.Box>
      </Mui.Grid>
      <Mui.Grid item xs={12} md={5}>
        {customList(right, "right")}
      </Mui.Grid>
    </Mui.Grid>
  );
};

export default Mui.withWidth()(TransferList);
